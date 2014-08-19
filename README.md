tcomb-doc
=========

Documentation tool for tcomb (proof of concept)

## Show me the best you can

For now the best example I can show you is the generated documentation of [tcomb-react-bootstrap](https://github.com/gcanti/tcomb-react-bootstrap), which is an attempt to add type safety to the awesome project [React Bootstrap](http://react-bootstrap.github.io).

[output of `formatMarkdown` applied to tcomb-react-bootstrap domain model](examples/tcomb-react-bootstrap.md)

**disclaimer**: tcomb-react-bootstrap is under heavy development so actually only a part of the components properties are documented.

## How it works

tcomb-doc parses a domain model written with tcomb and outputs a JSON representation of all types it can find.
Then you can process the output with a your transformation of choice. I added a `formatMarkdown` function
to provide an example of such transformations.

# Api

## parse(module)

Returns the list of all types found in `module`.

Example

```javascript
var t = require('tcomb');
var doc = require('tcomb-doc');

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
- [the output of `formatMarkdown` applied to tcomb-react-bootstrap domain model](examples/tcomb-react-bootstrap.md)
