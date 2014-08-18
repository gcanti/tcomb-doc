var t = require('tcomb');

var getName = t.getName;
var assert = t.assert;
var format = t.format;

function docType(T, index, pkg) {

  assert(t.isType(T), 'bad type %j', T);
  assert(t.Obj.is(index));

  function recurse(T) {
    docType(T, index, pkg);    
  }

  function getUri(T) {
    var name = getName(T);
    return pkg ? format('%s.%s', pkg, name) : name;    
  }
  
  var name = getName(T);
  var uri = getUri(T);
  var kind = T.meta.kind;
  
  if (!index.hasOwnProperty(uri)) {
    
    var json = index[uri] = {
      kind: kind,
      uri: uri,
      name: name
    };

    var A;
    switch(kind) {
      case 'primitive' :
        break;
      case 'struct' :
        json.props = {};
        Object.keys(T.meta.props).forEach(function (k) {
          A = T.meta.props[k];
          json.props[k] = {
            name: getName(A),
            uri: getUri(A) 
          };
          recurse(A);
        });
        break;
      case 'maybe' :
      case 'subtype' :
      case 'list' :
        A = T.meta.type;
        json.type = {
          name: getName(A),
          uri: getUri(A) 
        };
        recurse(A);
        break;
      case 'enums' :
        json.map = T.meta.map;
        break;
      case 'tuple' :
      case 'union' :
        json.types = [];
        T.meta.types.forEach(function (A) {
          json.types.push({
          name: getName(A),
          uri: getUri(A) 
          });
          recurse(A);
        });
        break;
      default :
        throw new Error(format('unknown type %s', getName(T)));
    }

  }

}

function doc(domain, pkg, index) {
  pkg = pkg || '';
  index = index || {};
  for (var k in domain) {
    if (domain.hasOwnProperty(k)) {
      var value = domain[k];
      if (t.Obj.is(value)) {
        doc(value, index, format('%s.%s', pkg, k));
      } else if (t.isType(value)) {
        docType(domain[k], index, pkg);
      } else {
        throw new Error(format('unknown value %j', value));
      }
    }
  }
  return index;
}

var Point = t.struct({x: t.Num, y: t.Num}, 'Point');
var Path = t.list(Point, 'Path');
var PointOrPath = t.union([Point, Path], 'PointOrPath');

var domain = {
  Point: Point,
  Path: Path
};
console.log(JSON.stringify(doc(domain), null, 2));

