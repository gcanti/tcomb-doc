var t = require('tcomb');
var doc = require('../index');
var domain = require('../src/domain');

var result = doc.parse(domain);
var json = result.toJSON();
console.log(JSON.stringify(json, null, 2));
console.log(doc.formatMarkdown(json));

