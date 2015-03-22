Documentation tool for [tcomb](https://github.com/gcanti/tcomb)

# API

## inspect(module: Object | Type): JSON

Returns a JSON containing all the types found in the module `module`.

**Example**

Input

```js
var inspect = require('tcomb-doc').inspect;

inspect({
  Positive: t.subtype(t.Num, function (n) { return n > 0; }, 'Positive'),
  PositiveInteger: t.subtype(t.Num, function (n) { return n > 0 && n % 1 === 0; }, 'PositiveInteger')
})
```

Output

```json
{
  "Positive": {
    "kind": "subtype",
    "name": "Positive",
    "type": {
      "kind": "irreducible",
      "name": "Num"
    },
    "predicate": {
      "name": "<function1>",
      "code": "function (n) { return n > 0; }"
    }
  },
  "PositiveInteger": {
    "kind": "subtype",
    "name": "PositiveInteger",
    "type": {
      "kind": "irreducible",
      "name": "Num"
    },
    "predicate": {
      "name": "<function1>",
      "code": "function (n) { return n > 0 && n % 1 === 0; }"
    }
  }
}
```

## toMarkdown(json: JSON, options?: Object): string

Given the output of `inspect`, returns a markdown containing all the types found in `json`.

### Options

- `title?: string`: format of the titles, default = `"# %s"` (`h1` tags in markdown)

**Example**

Input

```js
var inspect = require('tcomb-doc').inspect;
var toMarkdown = require('tcomb-doc').toMarkdown;

toMarkdown(inspect({
  Positive: t.subtype(t.Num, function (n) { return n > 0; }, 'Positive'),
  PositiveInteger: t.subtype(t.Num, function (n) { return n > 0 && n % 1 === 0; }, 'PositiveInteger')
}), {
  title: '**%s**' // bolded titles
})
```

Output

```markdown
**Positive**

`Positive` is a `subtype` of Num with predicate:

`function (n) { return n > 0; }`

**PositiveInteger**

`PositiveInteger` is a `subtype` of Num with predicate:

`function (n) { return n > 0 && n % 1 === 0; }`
```

For a more complex example, see the markdown generated for the [`api.js` module of tcomb-form](examples/tcomb-form.md)

## guess(json: JSON): Type

Given a JSON tries to guess a suitable tcomb's type.

**Example**

Input

```json
{
  "name": "Giulio",
  "surname": "Canti",
  "age": 41
}
```

Output

```js
t.struct({
  name: t.Str,
  surname: t.Str,
  age: t.Num
})
```
