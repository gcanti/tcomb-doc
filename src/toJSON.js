var t = require('tcomb');

var getName = t.getName;
var assert = t.assert;
var format = t.format;

function toJSON(domain, pkg, index) {
  pkg = pkg || [];
  index = index || {};
  for (var k in domain) {
    if (domain.hasOwnProperty(k)) {
      var value = domain[k];
      if (t.Obj.is(value)) {
        doc(value, index, pkg.concat(k));
      } else if (t.isType(value)) {
        typeToJSON(domain[k], index, pkg);
      } else {
        throw new Error(format('unknown value %j', value));
      }
    }
  }
  return index;
}

function typeToJSON(T, index, pkg) {

  assert(t.isType(T), 'bad type %j', T);
  assert(t.Obj.is(index));

  function recurse(T) {
    typeToJSON(T, index, pkg);    
  }

  function getUri(T) {
    var name = getName(T);
    return pkg.concat(name).join('.');    
  }
  
  function getNames(T) {
    return {
      name: getName(T),
      uri: getUri(T) 
    };
  }

  var uri = getUri(T);
  
  if (!index.hasOwnProperty(uri)) {
    
    var kind = T.meta.kind;
    var json = index[uri] = {
      kind: kind,
      uri: uri,
      name: getName(T)
    };

    var A;
    switch(kind) {
      case 'primitive' :
        break;
      case 'struct' :
        json.props = {};
        Object.keys(T.meta.props).forEach(function (k) {
          A = T.meta.props[k];
          json.props[k] = getNames(A);
          recurse(A);
        });
        break;
      case 'maybe' :
      case 'subtype' :
      case 'list' :
        A = T.meta.type;
        json.type = getNames(A);
        recurse(A);
        break;
      case 'enums' :
        json.map = T.meta.map;
        break;
      case 'tuple' :
      case 'union' :
        json.types = [];
        T.meta.types.forEach(function (A) {
          console.log(A);
          json.types.push(getNames(A));
          recurse(A);
        });
        break;
      default :
        throw new Error(format('unknown kind %s', getName(T)));
    }

  }

}

module.exports = toJSON;