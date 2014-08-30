var t = require('tcomb');
var doc = require('../index');
var components = require('../../tcomb-react-bootstrap/index');
var domain = {};
Object.keys(components).forEach(function (c) {
  domain[c] = components[c].Model;
});

var result = doc.parse(domain);
var json = result.toJSON();
console.log(JSON.stringify(json, null, 2));
//console.log(doc.toMarkdown(json));

