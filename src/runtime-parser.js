'use strict';

var t = require('tcomb');

var irriducibles = {
  Any: true,
  Nil: true,
  Bool: true,
  Str: true,
  Num: true,
  Arr: true,
  Obj: true,
  Func: true,
  Err: true,
  Re: true,
  Dat: true,
  Type: true
};

function isNamed(name) {
  return !/^[a-z]/.test(name);
}

function isNewType(name, types) {
  return !irriducibles.hasOwnProperty(name) && !types.hasOwnProperty(name);
}

function parseType(x, types) {
  var kind = t.util.getKind(x);
  var name = x.meta.name;
  var type = {
    kind: kind,
    name: name
  };
  switch (kind) {
    case 'irriducible' :
      if (isNewType(name, types)) {
        types[name] = type;
      }
      return type;
    case 'maybe' :
    case 'list' :
    case 'dict' :
    case 'subtype' :
      type.type = parseType(x.meta.type, types);
      if (kind === 'subtype') {
        type.predicate = x.meta.predicate.__doc__ || x.meta.predicate.name || 'unspecified';
      }
      break;      
    case 'tuple' :
    case 'union' :
      type.types = x.meta.types.map(function (type) {
        return parseType(type, types);
      });
      break;      
    case 'enums' :
      type.map = x.meta.map;
      break;      
    case 'struct' :
      var props = {};
      for (var k in x.meta.props) {
        if (x.meta.props.hasOwnProperty(k)) {
          props[k] = parseType(x.meta.props[k], types);
        }
      }
      type.props = props;
      break;      
    default :
      t.fail(t.util.format('unknown %s', kind));
  }
  if (isNamed(name) && isNewType(name, types)) {
    types[name] = type;
  }
  return type;
}

function parse(x, types) {
  types = types || {};
  if (t.util.isType(x)) {
    parseType(x, types);
  } else if (t.Obj.is(x)) {
    // module
    for (var k in x) {
      if (x.hasOwnProperty(k)) {
        parse(x[k], types);
      }
    }
  }
  return types;
}

module.exports = parse;