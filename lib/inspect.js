'use strict';

var t = require('tcomb');
var irreducibles = require('./irreducibles');

/*
function isNamed(name) {
  return !/^[a-z]/.test(name);
}
*/

function shouldAdd(x, types) {
  var kind = x.meta.kind;
  var name = x.meta.name;
  return !irreducibles.hasOwnProperty(name) &&
    !types.hasOwnProperty(name) &&
    !(kind in {maybe: true, list: true});
}

function inspectType(x, types) {
  var kind = x.meta.kind;
  var name = x.meta.name;
  var type = {
    kind: kind,
    name: name
  };
  if (shouldAdd(x, types)) {
    types[name] = type;
  }
  switch (kind) {
    case 'irreducible' :
      type.predicate = {
        name: t.getFunctionName(x.is),
        code: x.is.toString()
      };
      break;
    case 'maybe' :
    case 'list' :
    case 'subtype' :
      type.type = inspectType(x.meta.type, types);
      if (kind === 'subtype') {
        type.predicate = {
          name: t.getFunctionName(x.meta.predicate),
          code: x.meta.predicate.toString()
        };
      }
      break;
    case 'dict' :
      type.domain = inspectType(x.meta.domain, types);
      type.codomain = inspectType(x.meta.codomain, types);
      break;
    case 'tuple' :
    case 'union' :
      type.types = x.meta.types.map(function (type) {
        return inspectType(type, types);
      });
      break;
    case 'enums' :
      type.map = x.meta.map;
      break;
    case 'struct' :
      var props = {};
      for (var k in x.meta.props) {
        if (x.meta.props.hasOwnProperty(k)) {
          props[k] = inspectType(x.meta.props[k], types);
        }
      }
      type.props = props;
      break;
    default :
      t.fail(t.format('unknown kind %s', kind));
  }
  return type;
}

function inspect(x, types) {
  types = types || {};
  if (t.Type.is(x)) {
    // module.exports
    inspectType(x, types);
  } else if (t.Obj.is(x)) {
    // exports
    for (var k in x) {
      if (x.hasOwnProperty(k)) {
        inspect(x[k], types);
      }
    }
  }
  return types;
}

module.exports = inspect;