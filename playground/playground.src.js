$(function () {

  'use strict';

  var React = require('react');
  var t = require('tcomb-form');

  var URL = t.subtype(t.Str, function (s) {
    return s.indexOf('http') !== -1;
  });

  var Params = t.struct({
    url: URL,
    request: t.Str,
    response: t.Str
  });

  var Form = t.form.createForm(Params, {
    fields: {
      url: {value: 'https://api.github.com/repos/facebook/react'},
      request: {type: 'textarea'},
      response: {type: 'textarea'}
    }
  });

  var ParamForm = React.createClass({
    displayName: 'ParamForm',
    render: function () {
      return (
        React.DOM.div(null,
          Form({ref: 'form'}),
          React.DOM.button({className: 'btn btn-primary', ref: 'btn'}, 'Click Me')
        )
      );
    }
  });  

  var mountNode = document.getElementById('form');
  React.renderComponent(ParamForm(), mountNode);

});
