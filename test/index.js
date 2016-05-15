var test = require('tape');
var t = require('tcomb');
var toObject = require('../lib').toObject;

test('should throw if wrong arguments are passed in', function (assert) {
  assert.plan(1);
  try {
    toObject(1);
  } catch (e) {
    assert.equal(e.message, '[tcomb] Invalid value 1 supplied to toObject(), expected a type');
  }
});

test('irredicible', function (assert) {
  assert.plan(1);
  var expected = {
    kind: 'irreducible',
    required: true,
    name: 'String',
    predicate: t.String.meta.predicate
  };
  var actual = toObject(t.String);
  assert.deepEqual(actual, expected);
});

test('refinement', function (assert) {
  assert.plan(1);
  var Password = t.refinement(t.String, function (s) { return s.length >= 6; }, 'Password');
  var expected = {
    "kind": "refinement",
    "name": "Password",
    "required": true,
    "type": {
      "kind": "irreducible",
      "required": true,
      "name": "String",
      "predicate": t.String.meta.predicate
    },
    "predicate": Password.meta.predicate
  };
  var actual = toObject(Password);
  assert.deepEqual(actual, expected);
});

test('maybe', function (assert) {
  assert.plan(1);
  var expected = {
    kind: 'irreducible',
    required: false,
    name: 'String',
    predicate: t.String.meta.predicate
  };
  var actual = toObject(t.maybe(t.String));
  assert.deepEqual(actual, expected);
});

test('struct', function (assert) {
  assert.plan(1);
  var Person = t.struct({
    name: t.String,
    age: t.Number
  }, 'Person');
  var expected = {
    "kind": "struct",
    "required": true,
    "name": "Person",
    "strict": false,
    "props": {
      "name": {
        "kind": "irreducible",
        "required": true,
        "name": "String",
        "predicate": t.String.meta.predicate
      },
      "age": {
        "kind": "irreducible",
        "required": true,
        "name": "Number",
        "predicate": t.Number.meta.predicate
      }
    }
  };
  var actual = toObject(Person);
  assert.deepEqual(actual, expected);
});

test('struct (strict)', function (assert) {
  assert.plan(1);
  var Person = t.struct({
    name: t.String,
    age: t.Number
  }, { name: 'Person', strict: true });
  var expected = {
    "kind": "struct",
    "required": true,
    "name": "Person",
    "strict": true,
    "props": {
      "name": {
        "kind": "irreducible",
        "required": true,
        "name": "String",
        "predicate": t.String.meta.predicate
      },
      "age": {
        "kind": "irreducible",
        "required": true,
        "name": "Number",
        "predicate": t.Number.meta.predicate
      }
    }
  };
  var actual = toObject(Person);
  assert.deepEqual(actual, expected);
});

test('list', function (assert) {
  assert.plan(1);
  var Tags = t.list(t.String, 'Tags');
  var expected = {
    "kind": "list",
    "name": "Tags",
    "required": true,
    "type": {
      "kind": "irreducible",
      "required": true,
      "name": "String",
      "predicate": t.String.meta.predicate
    }
  };
  var actual = toObject(Tags);
  assert.deepEqual(actual, expected);
});

test('tuple', function (assert) {
  assert.plan(1);
  var Tuple = t.tuple([t.String, t.Number], 'Tuple');
  var expected = {
    "kind": "tuple",
    "name": "Tuple",
    "required": true,
    "types": [
      {
        "kind": "irreducible",
        "required": true,
        "name": "String",
        "predicate": t.String.meta.predicate
      },
      {
        "kind": "irreducible",
        "required": true,
        "name": "Number",
        "predicate": t.Number.meta.predicate
      }
    ]
  };
  var actual = toObject(Tuple);
  assert.deepEqual(actual, expected);
});

test('union', function (assert) {
  assert.plan(1);
  var Union = t.union([t.String, t.Number], 'Union');
  var expected = {
    "kind": "union",
    "name": "Union",
    "required": true,
    "types": [
      {
        "kind": "irreducible",
        "required": true,
        "name": "String",
        "predicate": t.String.meta.predicate
      },
      {
        "kind": "irreducible",
        "required": true,
        "name": "Number",
        "predicate": t.Number.meta.predicate
      }
    ],
    dispatch: Union.dispatch
  };
  var actual = toObject(Union);
  assert.deepEqual(actual, expected);
});

test('enums', function (assert) {
  assert.plan(1);
  var Country = t.enums({
    IT: 'Italy',
    US: 'United States'
  }, 'Country');
  var expected = {
    "kind": "enums",
    "name": "Country",
    "required": true,
    "map": {
      IT: 'Italy',
      US: 'United States'
    }
  };
  var actual = toObject(Country);
  assert.deepEqual(actual, expected);
});

test('dict', function (assert) {
  assert.plan(1);
  var Dict = t.dict(t.String, t.Number, 'Dict');
  var expected = {
    "kind": "dict",
    "name": "Dict",
    "required": true,
    "domain": {
      "kind": "irreducible",
      "required": true,
      "name": "String",
      "predicate": t.String.meta.predicate
    },
    "codomain": {
      "kind": "irreducible",
      "required": true,
      "name": "Number",
      "predicate": t.Number.meta.predicate
    }
  };
  var actual = toObject(Dict);
  assert.deepEqual(actual, expected);
});

test('intersection', function (assert) {
  assert.plan(1);
  var Min = t.refinement(t.String, function (s) { return s.length > 2; }, 'Min');
  var Max = t.refinement(t.String, function (s) { return s.length < 5; }, 'Max');
  var MinMax = t.intersection([Min, Max], 'MinMax');
  var expected = {
    "kind": "intersection",
    "name": "MinMax",
    "required": true,
    "types": [
      {
        "kind": "refinement",
        "name": "Min",
        "required": true,
        "type": {
          "kind": "irreducible",
          "required": true,
          "name": "String",
          "predicate": t.String.meta.predicate
        },
        "predicate": Min.meta.predicate
      },
      {
        "kind": "refinement",
        "name": "Max",
        "required": true,
        "type": {
          "kind": "irreducible",
          "required": true,
          "name": "String",
          "predicate": t.String.meta.predicate
        },
        "predicate": Max.meta.predicate
      }
    ]
  };
  var actual = toObject(MinMax);
  assert.deepEqual(actual, expected);
});

test('func', function (assert) {
  assert.plan(1);
  var Sum = t.func([t.Number, t.Number], t.Number, 'Sum');
  var expected = {
    "kind": "func",
    "name": "Sum",
    "required": true,
    "domain": [
      {
        "kind": "irreducible",
        "required": true,
        "name": "Number",
        "predicate": t.Number.meta.predicate
      },
      {
        "kind": "irreducible",
        "required": true,
        "name": "Number",
        "predicate": t.Number.meta.predicate
      }
    ],
    "codomain": {
      "kind": "irreducible",
      "required": true,
      "name": "Number",
      "predicate": t.Number.meta.predicate
    }
  };
  var actual = toObject(Sum);
  assert.deepEqual(actual, expected);
});

test('interface', function (assert) {
  assert.plan(1);
  var Person = t.inter({
    name: t.String,
    age: t.Number
  }, 'Person');
  var expected = {
    "kind": "interface",
    "required": true,
    "name": "Person",
    "strict": false,
    "props": {
      "name": {
        "kind": "irreducible",
        "required": true,
        "name": "String",
        "predicate": t.String.meta.predicate
      },
      "age": {
        "kind": "irreducible",
        "required": true,
        "name": "Number",
        "predicate": t.Number.meta.predicate
      }
    }
  };
  var actual = toObject(Person);
  assert.deepEqual(actual, expected);
});

test('interface (strict)', function (assert) {
  assert.plan(1);
  var Person = t.inter({
    name: t.String,
    age: t.Number
  }, { name: 'Person', strict: true });
  var expected = {
    "kind": "interface",
    "required": true,
    "name": "Person",
    "strict": true,
    "props": {
      "name": {
        "kind": "irreducible",
        "required": true,
        "name": "String",
        "predicate": t.String.meta.predicate
      },
      "age": {
        "kind": "irreducible",
        "required": true,
        "name": "Number",
        "predicate": t.Number.meta.predicate
      }
    }
  };
  var actual = toObject(Person);
  assert.deepEqual(actual, expected);
});
