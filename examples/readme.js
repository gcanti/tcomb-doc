var t = require('tcomb');
var doc = require('../index');

var Point = t.struct({
  x: t.Num, 
  y: t.Num
}, 'Point');

var Path = t.list(Point, 'Path');

module.exports = {
  Point: Point,
  Path: Path
};

var result = doc.parse(module.exports);
var json = result.toJSON();
console.log(JSON.stringify(json, null, 2));
console.log(doc.formatMarkdown(json));
