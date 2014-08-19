var t = require('tcomb');
var doc = require('../index');
var Alert = require('../../tcomb-react-bootstrap/index').Alert;
var domain = {
  Alert: Alert.Config
};

var result = doc.parse(domain);
var json = result.toJSON();
//console.log(JSON.stringify(json, null, 2));
console.log(doc.formatMarkdown(json));

