'use strict';

var t = require('tcomb');
var irreducibles = require('./irreducibles');
var format = t.format;

function getTypeName(type) {
  return type.name;
}

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

function toMarkdown(json, options) {
  options = options || {};
  options.title = options.title || '# %s';
  var md = '';
  var names = Object.keys(json).sort();
  names.forEach(function (name) {
    var type = json[name];
    var kind = type.kind;
    md += format(options.title + '\n\n', name);
    switch(kind) {
      case 'struct' :
        md += p('`%s` is a `struct` with the following props:', name);
        md += ul(Object.keys(type.props).sort().map(function (name) {
          return format('`%s`: %s', name, getTypeName(type.props[name]));
        }));
        break;
      case 'maybe' :
        md += p('`%s` is a `maybe` of %s', name, getTypeName(type.type));
        break;
      case 'subtype' :
        md += p('`%s` is a `subtype` of %s with predicate:\n\n```js\n%s\n```', name, getTypeName(type.type), type.predicate.code);
        break;
      case 'list' :
        md += p('`%s` is a `list` of %s', name, getTypeName(type.type));
        break;
      case 'enums' :
        md += p('`%s` is an `enums` of:', name);
        md += ul(Object.keys(type.map).sort().map(function (k) {
          return format('`"%s"`: `%j`', k, type.map[k]);
        }));
        break;
      case 'tuple' :
        md += p('`%s` is a `tuple` of %s', name, type.types.map(getTypeName).join(', '));
        break;
      case 'union' :
        md += p('`%s` is a `union` of %s', name, type.types.map(getTypeName).join(', '));
        break;
      case 'dict' :
        md += p('`%s` is a `dict` of %s', name, getTypeName(type.type));
        break;
      case 'irreducible' :
        md += p('`%s` is an `irreducible`', name);
        break;
      default :
        throw new Error(format('unknown kind %s', kind));
    }
  });
  return md;
}

module.exports = toMarkdown;