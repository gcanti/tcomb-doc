tcomb-doc
=========

Documentation tool for tcomb (proof of concept)

# Api

## parse(module)

Returns a `Doc` class describing all types found in `module`.

Example

```javascript
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
```

```json
[
  {
    "kind": "struct",
    "name": "Point",
    "props": [
      {
        "name": "x",
        "type": "Num"
      },
      {
        "name": "y",
        "type": "Num"
      }
    ]
  },
  {
    "kind": "list",
    "name": "Path",
    "type": "Point"
  }
]
```
## formatMarkdown(json)

Translates the JSON format to markdown.

Examples

- [the output of `formatMarkdown` applied to the library itself](examples/dogfood.md)
- [the output of `formatMarkdown` applied to tcomb-react-bootstrap bindings](examples/tcomb-react-bootstrap.md)

This is the output of `formatMarkdown` applied to the library itself: