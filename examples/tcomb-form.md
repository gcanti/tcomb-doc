**Auto**

`Auto` is an `enums` of:

- `"labels"`: `"labels"`
- `"none"`: `"none"`
- `"placeholders"`: `"placeholders"`

**Checkbox**

`Checkbox` is a `struct` with the following props:

- `autoFocus`: `?Bool`
- `className`: `?Str`
- `config`: `?Obj`
- `disabled`: `?Bool`
- `error`: `?Error`
- `hasError`: `?Bool`
- `help`: `?Label`
- `id`: `?Str`
- `label`: `?Label`
- `name`: `?Str`
- `template`: `?Func`

**Context**

`Context` is a `struct` with the following props:

- `auto`: `Auto`
- `config`: `?Obj`
- `i18n`: `I18n`
- `label`: `?Str`
- `name`: `?Str`
- `report`: `Report`
- `templates`: `Obj`

**Error**

`Error` is a `union` of Label, Func

**I18n**

`I18n` is a `struct` with the following props:

- `add`: `Str`
- `down`: `Str`
- `optional`: `Str`
- `remove`: `Str`
- `up`: `Str`

**Label**

`Label` is a `union` of Str, ReactElement

**List**

`List` is a `struct` with the following props:

- `auto`: `?Auto`
- `className`: `?Str`
- `config`: `?Obj`
- `disableAdd`: `?Bool`
- `disableOrder`: `?Bool`
- `disableRemove`: `?Bool`
- `disabled`: `?Bool`
- `error`: `?Error`
- `hasError`: `?Bool`
- `help`: `?Label`
- `i18n`: `?I18n`
- `item`: `?Obj`
- `legend`: `?Label`
- `templates`: `?Obj`

**NullOption**

`NullOption` is a `union` of Option, Bool

**OptGroup**

`OptGroup` is a `struct` with the following props:

- `disabled`: `?Bool`
- `label`: `Str`
- `options`: `Array<Option>`

**Option**

`Option` is a `struct` with the following props:

- `disabled`: `?Bool`
- `text`: `Str`
- `value`: `Str`

**Order**

`Order` is an `enums` of:

- `"asc"`: `"asc"`
- `"desc"`: `"desc"`

**ReactElement**

`ReactElement` is a `irreducible` with predicate:

```js
function (object) {
  // ReactTestUtils is often used outside of beforeEach where as React is
  // within it. This leads to two different instances of React on the same
  // page. To identify a element from a different React instance we use
  // a flag instead of an instanceof check.
  var isElement = !!(object && object._isReactElement);
  // if (isElement && !(object instanceof ReactElement)) {
  // This is an indicator that you're using multiple versions of React at the
  // same time. This will screw with ownership and stuff. Fix it, please.
  // TODO: We could possibly warn here.
  // }
  return isElement;
}
```

**Report**

`Report` is a `struct` with the following props:

- `innerType`: `?Type`
- `maybe`: `?Bool`
- `subtype`: `?Bool`
- `type`: `Type`

**Select**

`Select` is a `struct` with the following props:

- `autoFocus`: `?Bool`
- `className`: `?Str`
- `config`: `?Obj`
- `disabled`: `?Bool`
- `error`: `?Error`
- `hasError`: `?Bool`
- `help`: `?Label`
- `id`: `?Str`
- `label`: `?Label`
- `name`: `?Str`
- `nullOption`: `?NullOption`
- `options`: `?Array<SelectOption>`
- `order`: `?Order`
- `template`: `?Func`

**SelectOption**

`SelectOption` is a `union` of Option, OptGroup

**SelectValue**

`SelectValue` is a `union` of Str, Array<Str>

**Struct**

`Struct` is a `struct` with the following props:

- `auto`: `?Auto`
- `className`: `?Str`
- `config`: `?Obj`
- `disabled`: `?Bool`
- `error`: `?Error`
- `fields`: `?Obj`
- `hasError`: `?Bool`
- `help`: `?Label`
- `i18n`: `?I18n`
- `legend`: `?Label`
- `order`: `?Array<Label>`
- `templates`: `?Obj`

**Textbox**

`Textbox` is a `struct` with the following props:

- `autoFocus`: `?Bool`
- `className`: `?Str`
- `config`: `?Obj`
- `disabled`: `?Bool`
- `error`: `?Error`
- `hasError`: `?Bool`
- `help`: `?Label`
- `id`: `?Str`
- `label`: `?Label`
- `name`: `?Str`
- `placeholder`: `?Str`
- `template`: `?Func`
- `transformer`: `?Transformer`
- `type`: `?TypeAttr`

**Transformer**

`Transformer` is a `struct` with the following props:

- `format`: `Func`
- `parse`: `Func`

**TypeAttr**

`TypeAttr` is an `enums` of:

- `"color"`: `"color"`
- `"date"`: `"date"`
- `"datetime"`: `"datetime"`
- `"datetime-local"`: `"datetime-local"`
- `"email"`: `"email"`
- `"hidden"`: `"hidden"`
- `"month"`: `"month"`
- `"number"`: `"number"`
- `"password"`: `"password"`
- `"range"`: `"range"`
- `"search"`: `"search"`
- `"tel"`: `"tel"`
- `"text"`: `"text"`
- `"textarea"`: `"textarea"`
- `"time"`: `"time"`
- `"url"`: `"url"`
- `"week"`: `"week"`

