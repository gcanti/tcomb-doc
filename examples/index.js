var t = require('tcomb');
var doc = require('./doc');
var toMarkdown = require('./markdown');

var Point = t.struct({x: t.Num, y: t.Num}, 'Point');
var Path = t.list(Point, 'Path');
var PointOrPath = t.union([Point, Path], 'PointOrPath');
var E = t.enums({a: 1, b: 2}, 'E');

var domain = {
  Point: Point,
  Path: Path
  //, PointOrPath: PointOrPath,
  //, E: E
};

var index = doc(domain);
console.log(JSON.stringify(index, null, 2));
console.log(toMarkdown(index));

