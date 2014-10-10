'use strict';

var t = require('tcomb');

var Str = t.Str;
var Num = t.Num;
var Nil = t.Nil;
var Bool = t.Bool;
var Arr = t.Arr;
var Obj = t.Obj;
var subtype = t.subtype;
var list = t.list;
var struct = t.struct;
var maybe = t.maybe;
var union = t.union;

var JSONValue = union([Str, Num, Bool], 'JSONValue');

function getTypeName(name) {
  var chars = name.split('');
  chars[0] = chars[0].toUpperCase();
  if (chars[chars.length - 1] === 's') {
    chars.length = chars.length - 1;
  }
  return chars.join('');
}

function guess(x, name) {
  name = getTypeName(name || 'main');
  if (Str.is(x)) {
    return Str;
  } else if (Num.is(x)) {
    return Num;
  } else if (Bool.is(x)) {
    return Bool;
  } else if (Nil.is(x)) {
    return JSONValue;
  } else if (Arr.is(x)) {
    if (x.length === 0) {
      return list(JSONValue, name);
    } else {
      return list(guess(x[0]), name);
    }
  }
  var props = {};
  for (var k in x) {
    if (x.hasOwnProperty(k)) {
      props[k] = guess(x[k], k);
    }
  }
  return struct(props, name);
}

module.exports = {
  JSONValue: JSONValue,
  guess: guess
};