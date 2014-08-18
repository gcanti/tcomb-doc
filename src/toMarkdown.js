var t = require('tcomb');

var format = t.format;

function link(title, href) {
  return format('[%s](%s)', title, href);
}

function h1(s, name) {
  name = name || s;
  return format('# <a name="%s"/>%s\n\n', name, s);
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

function typeLink(T) {
  return link(T.name, '#' + T.uri);
}

function toMarkdown(index) {
  var uris = Object.keys(index).sort();
  var md = '';
  uris.forEach(function (uri) {
    var doc = index[uri];
    var kind = doc.kind
    var title = format('%s', uri);
    md += h1(title, uri);
    switch(kind) {
      case 'primitive' :
        md += p('Primitive.');
        break;
      case 'struct' :
        md += p('Props:');
        md += ul(Object.keys(doc.props).sort().map(function (k) {
          var T = doc.props[k];
          return format('%s: %s', k, typeLink(T));
        }));
        break;
      case 'maybe' :
        md += p('Optional: ' + typeLink(doc.type));
        md += p(typeLink(doc.type));
        break;
      case 'subtype' :
        md += p('Subtype of: ' + typeLink(doc.type));
        break;
      case 'list' :
        md += p('List of: ' + typeLink(doc.type));
        break;
      case 'enums' :
        md += p('Enums:');
        md += ul(Object.keys(doc.map).sort().map(function (k) {
          return format('%s: %j', k, doc.map[k]);
        }));
        break;
      case 'tuple' :
        md += p('Tuple of:');
        md += ul(doc.types.map(typeLink));
        break;
      case 'union' :
        md += p('Union of:');
        md += ul(doc.types.map(typeLink));
        break;
      default :
        throw new Error(format('unknown kind %s', kind));
    }
  });
  return md;
}

module.exports = toMarkdown;