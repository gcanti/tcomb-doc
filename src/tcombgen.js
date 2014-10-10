'use strict';

var esprima = require('esprima');
var t = require('tcomb');

var Str = t.Str;
var list = t.list;
var maybe = t.maybe;
var struct = t.struct;

// TODO remove once tcomb 0.3.0 lands
var Type = t.irriducible('Type', t.util.isType);

//
// AST helpers
//


function identifier(name) {
  return { type: 'Identifier', name: name };
}

function literal(value) {
  return {
    type: 'Literal',
    value: value
  };
}

function declaration(name, init) {
  return {
    type: 'VariableDeclaration',
    declarations: [{
      type: 'VariableDeclarator',
      id: identifier(name),
      init: init
    }],
    kind: 'var'
  };
}

function callExpression(callee, args) {
  return { 
    type: 'CallExpression', 
    callee: identifier(callee), 
    arguments: args
  };
}

function objectExpression(properties) {
  return { 
    type: 'ObjectExpression', 
    properties: properties
  };
}

function functionExpression(id, params, body) {
  return { 
    type: 'FunctionExpression',
    id: null,
    params: [identifier('x')],
    body: { type: 'BlockStatement', body: [Object] },
  };
}

function parseFunction(f) {
  return esprima.parse('(' + f + ')').body[0].expression;
}

function arrayExpression(elements) {
  return { 
    type: 'ArrayExpression',
    elements: elements
  };
}

//
// irriducible
//

var Irriducible = struct({
  name: Str,
  predicate: t.Func
});

Irriducible.prototype.toAST = function() {
  return declaration(this.name, callExpression('irriducible', [
    literal(this.name),
    parseFunction(this.predicate)
  ]));
};

//
// maybe
//

var Maybe = struct({
  type: Str
});

Maybe.prototype.toAST = function() {
  return callExpression('maybe', [
    identifier(this.type)
  ]);
};

//
// list
//

var List = struct({
  type: Str
});

List.prototype.toAST = function() {
  return callExpression('list', [
    identifier(this.type)
  ]);
};

//
// dict
//

var Dict = struct({
  type: Str
});

Dict.prototype.toAST = function() {
  return callExpression('dict', [
    identifier(this.type)
  ]);
};

//
// union
//

var Union = struct({
  name: Str,
  types: list(Str)
});

Union.prototype.toAST = function() {
  return declaration(this.name, callExpression('union', [
    arrayExpression(this.types.map(identifier)),
    literal(this.name)
  ]));
};

//
// enums
//

var Enum = struct({
  name: Str,
  value: t.Any
});

Enum.prototype.toAST = function() {
  return { 
    type: 'Property',
    key: identifier(this.name),
    value: identifier(this.value),
    kind: 'init' 
  };
};

var Enums = struct({
  name: Str,
  map: t.Obj
});

Enums.prototype.toAST = function() {
  var properties = [];
  for (var name in this.map) {
    if (this.map.hasOwnProperty(name)) {
      properties.push(new Enum({
        name: name,
        value: this.map[name]
      }).toAST());
    }
  }
  return declaration(this.name, callExpression('enums', [
    objectExpression(properties),
    literal(this.name)
  ]));
};

//
// subtype
//

var Subtype = struct({
  name: Str,
  type: Str,
  predicate: t.Func
});

Subtype.prototype.toAST = function() {
  return declaration(this.name, callExpression('subtype', [
    identifier(this.type),
    parseFunction(this.predicate),
    literal(this.name)
  ]));
};

Subtype.prototype.toJSON = function() {
  return {
    name: this.name,
    type: this.type,
    predicate: this.predicate.__doc__ || this.predicate.name || 'unspecified predicate'
  };
};

//
// struct
//

var Struct = struct({
  name: Str,
  props: t.dict(Type)
});

Struct.prototype.toAST = function() {
  var properties = [];
  for (var k in this.props) {
    if (this.props.hasOwnProperty(k)) {
      properties.push({ 
        type: 'Property',
        key: identifier(k),
        value: identifier(this.props[k]),
        kind: 'init' 
      });
    }
  }
  return declaration(this.name, callExpression('struct', [
    objectExpression(properties),
    literal(this.name)
  ]));
};

module.exports = {
  Irriducible: Irriducible,
  Maybe: Maybe,
  List: List,
  Dict: Dict,
  Union: Union,
  Enums: Enums,
  Subtype: Subtype,
  Struct: Struct
};