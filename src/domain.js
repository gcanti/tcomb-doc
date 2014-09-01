'use strict';

var t = require('tcomb');

var Str = t.Str;
var Obj = t.Obj;
var enums = t.enums;
var struct = t.struct;
var union = t.union;
var list = t.list;
var maybe = t.maybe;
var mixin = t.mixin;

function toJSON(kind) {
  return function () {
    return mixin({kind: kind}, this);
  };
}

var Enums = struct({
  name: Str,
  enums: Obj
}, 'Enums');

Enums.prototype.toJSON = toJSON('enums');

var List = struct({
  name: Str,
  type: Str
}, 'List');

List.prototype.toJSON = toJSON('list');

var Maybe = struct({
  name: Str,
  type: Str
}, 'Maybe');

Maybe.prototype.toJSON = toJSON('maybe');

var Prop = struct({
  name: Str,
  type: Str
}, 'Prop');

var Struct = struct({
  name: Str,
  props: list(Prop)
}, 'Struct');

Struct.prototype.toJSON = toJSON('struct');

var Subtype = struct({
  name: Str,
  type: Str,
  predicate: maybe(Str)
}, 'Subtype');

Subtype.prototype.toJSON = toJSON('subtype');

var Tuple = struct({
  name: Str,
  types: list(Str)
}, 'Tuple');

Tuple.prototype.toJSON = toJSON('tuple');

var Union = struct({
  name: Str,
  types: list(Str)
}, 'Union');

Union.prototype.toJSON = toJSON('union');

var Dict = struct({
  name: Str,
  type: Str
}, 'Dict');

Dict.prototype.toJSON = toJSON('dict');

var Primitive = struct({
  name: Str
}, 'Primitive');

Primitive.prototype.toJSON = toJSON('primitive');

var Type = union([Struct, Enums, List, Maybe, Subtype, Tuple, Union, Dict, Primitive], 'Type');

var Doc = struct({
  types: list(Type)
}, 'Doc');

Doc.prototype.toJSON = function (result) {
  return this.types.map(function (type) {
    return type.toJSON();
  });
};

module.exports = {
  Doc: Doc,
  Type: Type,
  Union: Union,
  Tuple: Tuple,
  Subtype: Subtype,
  Maybe: Maybe,
  List: List,
  Enums: Enums,
  Struct: Struct,
  Prop: Prop,
  Dict: Dict,
  Primitive: Primitive
};
