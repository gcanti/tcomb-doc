"use strict";
var assert = require('assert');
var t = require('tcomb');
var parse = require('../src/runtime-parser');

var Str = t.Str;
var Num = t.Num;
var Bool = t.Bool;
var Nil = t.Nil;
var getKind = t.util.getKind;

//
// setup
//

var ok = function (x) { assert.strictEqual(true, x); };
var ko = function (x) { assert.strictEqual(false, x); };
var eq = assert.deepEqual;

describe('parse', function () {

  var Alias = Str;
  var MyIrriducible = t.irriducible('MyIrriducible', function (x) { return true; });

  it('should handle aliases', function () {
    var json = parse(Alias);
    eq(json, {});
  });

  it('should handle irriducibles', function () {
    var json = parse(Str);
    eq(json, {});
    json = parse(MyIrriducible);
    eq(json, {
      'MyIrriducible': {
        kind: 'irriducible',
        name: 'MyIrriducible'
      }
    });
  });

  it('should handle maybe', function () {
    var json = parse(t.maybe(MyIrriducible));
    eq(json, {
      'MyIrriducible': {
        kind: 'irriducible',
        name: 'MyIrriducible'
      }
    });
    json = parse(t.maybe(MyIrriducible, 'MyMaybe'));
    eq(json, {
      'MyIrriducible': {
        kind: 'irriducible',
        name: 'MyIrriducible'
      },
      'MyMaybe': {
        kind: 'maybe',
        name: 'MyMaybe',
        type: {
          kind: 'irriducible',
          name: 'MyIrriducible'
        }
      }
    });
  });

  it('should handle list', function () {
    var json = parse(t.list(MyIrriducible, 'Main'));
    eq(json, {
      'MyIrriducible': {
        kind: 'irriducible',
        name: 'MyIrriducible'
      },
      'Main': {
        kind: 'list',
        name: 'Main',
        type: {
          kind: 'irriducible',
          name: 'MyIrriducible'
        }
      }
    });
    json = parse(t.list(MyIrriducible, 'MyList'));
    eq(json, {
      'MyIrriducible': {
        kind: 'irriducible',
        name: 'MyIrriducible'
      },
      'MyList': {
        kind: 'list',
        name: 'MyList',
        type: {
          kind: 'irriducible',
          name: 'MyIrriducible'
        }
      }
    });
  });

  it('should handle dict', function () {
    var json = parse(t.dict(Str, MyIrriducible));
    eq(json, {
      'MyIrriducible': {
        kind: 'irriducible',
        name: 'MyIrriducible'
      }
    });
    json = parse(t.dict(Str, MyIrriducible, 'MyDict'));
    eq(json, {
      'MyIrriducible': {
        kind: 'irriducible',
        name: 'MyIrriducible'
      },
      'MyDict': {
        kind: 'dict',
        name: 'MyDict',
        domain: {
          kind: 'irriducible',
          name: 'Str'
        },
        codomain: {
          kind: 'irriducible',
          name: 'MyIrriducible'
        }
      }
    });
  });

  it('should handle tuple', function () {
    var json = parse(t.tuple([Str, MyIrriducible]));
    eq(json, {
      'MyIrriducible': {
        kind: 'irriducible',
        name: 'MyIrriducible'
      }
    });
    json = parse(t.tuple([Str, MyIrriducible], 'MyTuple'));
    eq(json, {
      'MyIrriducible': {
        kind: 'irriducible',
        name: 'MyIrriducible'
      },
      'MyTuple': {
        kind: 'tuple',
        name: 'MyTuple',
        types: [
          {
            kind: 'irriducible',
            name: 'Str'
          },
          {
            kind: 'irriducible',
            name: 'MyIrriducible'
          }
        ]
      }
    });
  });

  it('should handle subtype', function () {
    var predicate = function (x) { return x.length > 2; };
    var json = parse(t.subtype(Str, predicate));
    eq(json, {});
    json = parse(t.subtype(Str, predicate, 'MySubtype'));
    eq(json, {
      'MySubtype': {
        kind: 'subtype',
        name: 'MySubtype',
        type: {
          kind: 'irriducible',
          name: 'Str'
        },
        predicate: 'unspecified'
      }
    });
  });

  it('should handle enums', function () {
    var json = parse(t.enums({IT: 'it', US: 'us'}));
    eq(json, {});
    json = parse(t.enums({IT: 'it', US: 'us'}, 'MyEnum'));
    eq(json, {
      'MyEnum': {
        kind: 'enums',
        name: 'MyEnum',
        map: {IT: 'it', US: 'us'}
      }
    });
  });

  it('should handle struct', function () {
    var json = parse(t.struct({a: Str, b: Num}));
    eq(json, {});
    json = parse(t.struct({a: Str, b: MyIrriducible}));
    eq(json, {
      'MyIrriducible': {
        kind: 'irriducible',
        name: 'MyIrriducible'
      }
    });
    json = parse(t.struct({a: Str, b: MyIrriducible}, 'MyStruct'));
    eq(json, {
      'MyIrriducible': {
        kind: 'irriducible',
        name: 'MyIrriducible'
      },
      'MyStruct': {
        kind: 'struct',
        name: 'MyStruct',
        props: {
          a: {
            kind: 'irriducible',
            name: 'Str'
          },
          b: {
            kind: 'irriducible',
            name: 'MyIrriducible'
          }
        }
      }
    });
  });

  it('should handle union', function () {
    var json = parse(t.union([Str, MyIrriducible]));
    eq(json, {
      'MyIrriducible': {
        kind: 'irriducible',
        name: 'MyIrriducible'
      }
    });
    json = parse(t.tuple([Str, MyIrriducible], 'MyUnion'));
    eq(json, {
      'MyIrriducible': {
        kind: 'irriducible',
        name: 'MyIrriducible'
      },
      'MyUnion': {
        kind: 'tuple',
        name: 'MyUnion',
        types: [
          {
            kind: 'irriducible',
            name: 'Str'
          },
          {
            kind: 'irriducible',
            name: 'MyIrriducible'
          }
        ]
      }
    });
  });

  it('should handle complex domain models', function () {
    var a = require('./a');
    var json = parse(a);
    //console.log(JSON.stringify(json, null, 2));
  });

});

describe('parse', function () {

  var guess = require('../src/guesser');

  it('should handle strings', function () {
    var type = guess('a');
    ok(type === Str);
  });

  it('should handle numbers', function () {
    var type = guess(1);
    ok(type === Num);
  });

  it('should handle booleans', function () {
    var type = guess(true);
    ok(type === Bool);
  });

  it('should handle null', function () {
    var type = guess(null);
    ok(type === Nil);
  });

  describe('arrays', function () {

    it('should handle arrays with length 0', function () {
      var type = guess([]);
      eq(getKind(type), 'list');
      ok(type.meta.type === Nil);
    });

    it('should handle arrays with length > 0', function () {
      var type = guess(['a']);
      eq(getKind(type), 'list');
      ok(type.meta.type === Str);
      type = guess([{a: 1}, {a: 2}]);
      eq(getKind(type), 'list');
      eq(getKind(type.meta.type), 'struct');
    });

  });

  describe('objects', function () {

    it('should handle objects with no properties', function () {
      var type = guess({});
      eq(getKind(type), 'struct');
      eq(Object.keys(type.meta.props).length, 0);
    });

    it('should handle objects with properties', function () {
      var type = guess({a: 1});
      eq(getKind(type), 'struct');
      eq(type.meta.props, {a: Num});
    });

    it('should handle nested structures', function () {
      var type = guess({a: [1]});
      eq(getKind(type), 'struct');
      eq(getKind(type.meta.props.a), 'list');
      eq(type.meta.props.a.meta.name, 'A');
    });

  });

});

describe('toMarkdown', function () {

  var toMarkdown = require('../src/toMarkdown');

  it('should handle complex domain models', function () {
    var a = require('./a');
    var json = parse(a);
    //console.log(toMarkdown(json));
  });

});

/*
describe('source-parser.parse', function () {
  var src = require('fs').readFileSync(__dirname + '/source-parser-test.src', 'utf-8');
  var parse = require('../src/source-parser');
  var types = parse(src);
  console.log(JSON.stringify(types, null, 2));
});

describe('tcombgen', function () {

  var tgen = require('../src/tcombgen');
  var escodegen = require('escodegen');
  var options = {
    format: {indent: {style: '  '}}
  };
  var generate = function (x) {
    return escodegen.generate(x, options);
  };

  var esprima = require('esprima');
  //var ast = esprima.parse('[1, 2, 3]');
  //console.log(ast.body[0]);

  describe('Irriducible', function () {

    it('should produce a correct AST', function () {
      var s = new tgen.Irriducible({
        name: 'Positive',
        predicate: function (n) { return n > 0; }
      });
      eq(generate(s.toAST()), 'var Positive = irriducible(\'Positive\', function (n) {\n  return n > 0;\n});');
    });

  });

  describe('Maybe', function () {

    it('should produce a correct AST', function () {
      var s = new tgen.Maybe({
        type: 'Str'
      });
      eq(generate(s.toAST()), 'maybe(Str)');
    });

  });

  describe('List', function () {

    it('should produce a correct AST', function () {
      var s = new tgen.List({
        type: 'Str'
      });
      eq(generate(s.toAST()), 'list(Str)');
    });

  });

  describe('Dict', function () {

    it('should produce a correct AST', function () {
      var s = new tgen.Dict({
        type: 'Str'
      });
      eq(generate(s.toAST()), 'dict(Str)');
    });

  });

  describe('Union', function () {

    it('should produce a correct AST', function () {
      var s = new tgen.Union({
        name: 'MyUnion',
        types: ['Str', 'Num']
      });
      eq(generate(s.toAST()), 'var MyUnion = union([\n  Str,\n  Num\n], \'MyUnion\');');
    });

  });

  describe('Enums', function () {

    it('should produce a correct AST', function () {
      var s = new tgen.Enums({
        name: 'MyEnum',
        map: {a: 1, b: 2}
      });
      eq(generate(s.toAST()), 'var MyEnum = enums({\n  a: 1,\n  b: 2\n}, \'MyEnum\');');
    });

  });

  describe('Subtype', function () {

    it('should produce a correct AST', function () {
      var s = new tgen.Subtype({
        name: 'Positive',
        type: 'Num',
        predicate: function (n) { return n > 0; }
      });
      eq(generate(s.toAST()), 'var Positive = subtype(Num, function (n) {\n  return n > 0;\n}, \'Positive\');');
    });

  });

  describe('Struct', function () {

    it('should handle no properties', function () {
      var s = new tgen.Struct({
        name: 'Person',
        props: []
      });
      eq(generate(s.toAST()), 'var Person = struct({}, \'Person\');');
    });

    it('should handle one property', function () {
      var s = new tgen.Struct({
        name: 'Person',
        props: [
          {name: 'name', type: 'Str'}
        ]
      });
      eq(generate(s.toAST()), 'var Person = struct({ name: Str }, \'Person\');');
    });

    it('should handle two properties', function () {
      var s = new tgen.Struct({
        name: 'Person',
        props: [
          {name: 'name', type: 'Str'},
          {name: 'surname', type: 'Str'}
        ]
      });
      eq(generate(s.toAST()), 'var Person = struct({\n  name: Str,\n  surname: Str\n}, \'Person\');');
    });

  });

});
*/

