'use strict';

var t = require('tcomb');

var format = t.util.format;

var irriducibles = {
  Any: true,
  Nil: true,
  Bool: true,
  Str: true,
  Num: true,
  Arr: true,
  Obj: true,
  Func: true,
  Err: true,
  Re: true,
  Dat: true,
  Type: true
};

function h1(s) {
  return format('# %s\n\n', s);
}

function strong(s) {
  return format('**%s**', s);
}

function p(s) {
  var args = Array.prototype.slice.call(arguments, 1);
  return format.apply(null, [s + '\n\n'].concat(args));
}

function ul(lis) {
  return lis.map(function (li) {
    return format('- %s', li);
  }).join('\n') + '\n\n';
}

function code(s) {
  return format('`%s`', s);
}

function getName(type) {
  var name = type.name;
  return irriducibles.hasOwnProperty(name) ? code(name) : strong(code(name));
}

function toMarkdown(json) {
  var md = '';
  var names = Object.keys(json).sort();
  names.forEach(function (name) {
    var type = json[name];
    var kind = type.kind;
    md += h1(name);
    switch(kind) {
      case 'struct' :
        md += p('`%s` is a `struct` with the following props:', name);
        md += ul(Object.keys(type.props).sort().map(function (name) {
          return format('`%s`: %s', name, getName(type.props[name]));
        }));
        break;
      case 'maybe' :
        md += p('`%s` is a `maybe` of %s', name, getName(type.type));
        break;
      case 'subtype' :
        md += p('`%s` is a `subtype` of %s such that: %s', name, getName(type.type), type.predicate);
        break;
      case 'list' :
        md += p('`%s` is a `list` of %s', name, getName(type.type));
        break;
      case 'enums' :
        md += p('`%s` is an `enums` of:', name);
        md += ul(Object.keys(type.map).sort().map(function (k) {
          return format('`"%s"`: `%j`', k, type.map[k]);
        }));
        break;
      case 'tuple' :
        md += p('`%s` is a `tuple` of %s', name, type.types.map(getName).join(', '));
        break;
      case 'union' :
        md += p('`%s` is a `union` of %s', name, type.types.map(getName).join(', '));
        break;
      case 'dict' :
        md += p('`%s` is a `dict` of %s', name, getName(type.type));
        break;
      case 'irriducible' :
        md += p('`%s` is a `irriducible`', name);
        break;
      default :
        throw new Error(format('unknown kind %s', kind));
    }
  });
  return md;
}

module.exports = toMarkdown;