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

Example

This is the output of `formatMarkdown` applied to the library itself:

# Result

Props:

- `types`: `list(Type)`

# Type

`union(Struct, Enums, List, Maybe, Subtype, Tuple, Union)`

# Struct

Props:

- `name`: `Str`
- `props`: `list(Prop)`

# Enums

Props:

- `name`: `Str`
- `enums`: `Obj`

# List

Props:

- `name`: `Str`
- `type`: `Str`

# Maybe

Props:

- `name`: `Str`
- `type`: `Str`

# Subtype

Props:

- `name`: `Str`
- `type`: `Str`

# Tuple

Props:

- `name`: `Str`
- `types`: `list(Str)`

# Union

Props:

- `name`: `Str`
- `types`: `list(Str)`

# Prop

Props:

- `name`: `Str`
- `type`: `Str`


