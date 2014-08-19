'use strict';

var t = require('tcomb');

var format = t.format;

function h1(s) {
  return format('# %s\n\n', s);
}

function h2(s) {
  return format('## %s\n\n', s);
}

function p(s) {
  return format('%s\n\n', s);
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
    md += h1(name);
    switch(kind) {
      case 'struct' :
        md += p('Props:');
        md += ul(type.props.sort().map(function (prop) {
          return format('`%s`: `%s`', prop.name, prop.type);
        }));
        break;
      case 'maybe' :
        md += p(format('`maybe(%s)`', type.type));
        break;
      case 'subtype' :
        md += p(format('`%s` is a `subtype` of `%s` such that: %s', name, type.type, type.predicate));
        break;
      case 'list' :
        md += p(format('`list(%s)`', type.type));
        break;
      case 'enums' :
        md += p('Enums:');
        md += ul(Object.keys(type.enums).sort().map(function (k) {
          return format('`%s`: `%j`', k, type.enums[k]);
        }));
        break;
      case 'tuple' :
        md += p(format('`list(%s)`', type.types.join(', ')));
        break;
      case 'union' :
        md += p(format('`union(%s)`', type.types.join(', ')));
        break;
      default :
        throw new Error(format('unknown kind %s', kind));
    }
  });
  return md;
}

module.exports = formatMarkdown;