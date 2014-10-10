'use strict';
var t = require('tcomb');

var Value = t.union([t.Str, t.Num, t.Bool], 'Value');

module.exports = {
  Value: Value
};