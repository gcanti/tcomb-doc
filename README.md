tcomb-doc
=========

Documentation tool for tcomb (proof of concept)

# Api

## doc(domain, [pkg], [index])

Returns a JSON describing all types found in `domain`.

Example

```javascript
var Point = struct({
  x: Num, 
  y: Num
}, 'Point');

var Path = list(Point, 'Path');

module.exports = {
  Point: Point,
  Path: Path
};

var index = doc(module.exports);
console.log(index);
```

```json
{
  "Point": {
    "kind": "struct",
    "uri": "Point",
    "name": "Point",
    "props": {
      "x": {
        "name": "Num",
        "uri": "Num"
      },
      "y": {
        "name": "Num",
        "uri": "Num"
      }
    }
  },
  "Num": {
    "kind": "primitive",
    "uri": "Num",
    "name": "Num"
  },
  "Path": {
    "kind": "list",
    "uri": "Path",
    "name": "Path",
    "type": {
      "name": "Point",
      "uri": "Point"
    }
  }
}
```

```javascript
console.log(toMarkdown(index));
```

```markdown
# <a name="Num"/>Num

Primitive.

# <a name="Path"/>Path

List of: [Point](#Point)

# <a name="Point"/>Point

Props:

- x: [Num](#Num)
- y: [Num](#Num)
```