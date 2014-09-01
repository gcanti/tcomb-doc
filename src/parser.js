'use strict';

var t = require('tcomb');
var domain = require('./domain');

var Obj = t.Obj;
var format = t.format;
var isType = t.isType;
var getName = t.getName;

function isNamed(name) {
  // TODO: better test
  return !/^[a-z]/.test(name);
}

function parse(module) {
  var index = {};
  for (var k in module) {
    if (module.hasOwnProperty(k)) {
      parseType(module[k], index);
    }
  }
  var types = Object.keys(index).map(function (k) {
    return index[k];
  });
  return domain.Doc({types: types});
}

function parseType(T, index) {
  if (!isType(T)) { return; }
  var name = getName(T);
  var kind = T.meta.kind;
  // exclude types already indexed
  if (index.hasOwnProperty(name)) { return; }
  switch(kind) {
    case 'enums' :
      index[name] = domain.Enums({
        name: name,
        enums: T.meta.map
      });
      break;
    case 'list' :
      if (isNamed(name)) {
        index[name] = domain.List({
          name: name,
          type: getName(T.meta.type)
        });
      }
      parseType(T.meta.type, index);
      break;
    case 'maybe' :
      if (isNamed(name)) {
        index[name] = domain.Maybe({
          name: name,
          type: getName(T.meta.type)
        });
      }
      parseType(T.meta.type, index);
      break;
    case 'struct' :
      var props = Object.keys(T.meta.props); 
      index[name] = domain.Struct({
        name: name,
        props: props.map(function (prop) {
          var P = T.meta.props[prop];
          return domain.Prop({name: prop, type: getName(P)});
        })
      });
      props.forEach(function (prop) {
        var P = T.meta.props[prop];
        parseType(P, index);
      });
      break;
    case 'subtype' :
      if (isNamed(name)) {
        index[name] = domain.Subtype({
          name: name,
          type: getName(T.meta.type),
          predicate: T.meta.predicate.__doc__ || T.meta.predicate.name || 'function'
        });
      }
      parseType(T.meta.type, index);
      break;
    case 'tuple' :
      if (isNamed(name)) {
        index[name] = domain.Tuple({
          name: name,
          types: T.meta.types.map(getName)
        });
      }
      T.meta.types.forEach(function (T) {
        parseType(T, index);
      });
      break;
    case 'union' :
      if (isNamed(name)) {
        index[name] = domain.Union({
          name: name,
          types: T.meta.types.map(getName)
        });
      }
      T.meta.types.forEach(function (T) {
        parseType(T, index);
      });
      break;
    case 'dict' :
      if (isNamed(name)) {
        index[name] = domain.Dict({
          name: name,
          type: getName(T.meta.type)
        });
      }
      parseType(T.meta.type, index);
      break;
    case 'any' :
    case 'primitive' :
      if (isNamed(name)) {
        index[name] = domain.Primitive({
          name: name
        });
      }
      break;
    default :
      throw new Error(format('unknown kind %s', getName(T)));
  }
}

module.exports = parse;
