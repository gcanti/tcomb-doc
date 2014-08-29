'use strict';

var t = require('tcomb');

var format = t.format;

function h4(s) {
  return format('#### %s\n\n', s);
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

function formatMarkdown(json) {
  var md = '';
  json.forEach(function (type) {
    var kind = type.kind;
    var name = type.name;
    md += h4(name);
    switch(kind) {
      case 'struct' :
        if (type.props.length) {
          md += p('`%s` is a `struct` with the following props:', name);
          md += ul(type.props.sort().map(function (prop) {
            return format('`%s`: `%s`', prop.name, prop.type);
          }));
        } else {
          md += p('`%s` is a `struct` with no props.', name);
        }
        break;
      case 'maybe' :
        md += p('`%s` is a `maybe(%s)`', name, type.type);
        break;
      case 'subtype' :
        md += p('`%s` is a `subtype` of `%s`', name, type.type);
        break;
      case 'list' :
        md += p('`%s` is a `list` of `%s`', name, type.type);
        break;
      case 'enums' :
        md += p('`%s` is an `enums` of:', name);
        md += ul(Object.keys(type.enums).sort().map(function (k) {
          return format('`"%s"`: `%j`', k, type.enums[k]);
        }));
        break;
      case 'tuple' :
        md += p('`%s` is a `tuple` of `%s`', name, type.types.join(', '));
        break;
      case 'union' :
        md += p('`%s` is a `union` of `%s`', name, type.types.join(', '));
        break;
      default :
        throw new Error(format('unknown kind %s', kind));
    }
  });
  return md;
}

module.exports = formatMarkdown;