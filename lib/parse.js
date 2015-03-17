'use strict';

var esprima = require('esprima');
var estraverse = require('estraverse');
var t = require('tcomb');

function dump(x) {
  console.log(JSON.stringify(x, null, 2));
}

function getName(x) {
  return x ? x.value : null
}

var managers = {
  Identifier: function (node) {
    return node.name;
  },
  CallExpression: function (node, name) {
    var kind = node.callee.name;
    var type;
    switch (kind) {
      case 'maybe' :
      case 'list' :
        return {
          kind: kind,
          type: getType(node.arguments[0])
        };
      case 'dict' :
        return {
          kind: kind,
          domain: getType(node.arguments[0]),
          codomain: getType(node.arguments[1])
        };
      case 'union' :
        return {
          kind: kind,
          name: name || getName(node.arguments[1]),
          types: node.arguments[0].elements.map(getType)
        };
      case 'subtype' :
        return {
          kind: kind,
          name: name || getName(node.arguments[2]),
          type: getType(node.arguments[0])
        };
      case 'enums' :
        var map = {};
        node.arguments[0].properties.map(function (property) {
          map[property.key.name] = property.value.value;
        });
        return {
          kind: kind,
          name: name || getName(node.arguments[1]),
          map: map
        };
      case 'struct' :
        return {
          kind: kind,
          name: name || getName(node.arguments[1]),
          properties: node.arguments[0].properties.map(function (property) {
            return {
              name: property.key.name, 
              type: getType(property.value), 
              docs: property.leadingComments ? property.leadingComments.map(function (comment) {
                return comment.value.trim();
              }).join('\n') : null
            }
          })
        };
    }
  }
};

function getType(node, name) {
  return managers[node.type](node, name);
}

function parse(src) {
  try {
    var types = {};
    var ast = esprima.parse(src, {comment: true, tokens: true, range: true});
    estraverse.attachComments(ast, ast.comments, ast.tokens);
    estraverse.traverse(ast, {
      enter: function(node){
        if (node.type === 'VariableDeclarator'){
          var type = getType(node.init, node.id.name);
          types[node.id.name] = type;
        }
      }
    });
    return types;
  } catch (e) {
    console.error(e);
    return null;
  }
}

module.exports = parse;
