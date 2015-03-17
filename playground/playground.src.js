$(function () {

  'use strict';

  var t = require('tcomb-form');
  var doc = require('../index');
  var marked = require('marked');

  function go() {
    try {
      var json = JSON.parse($('#payload').val());
      var Type = doc.guess(json);
      var tjson = doc.inspect(Type);
      var markdown = doc.toMarkdown(tjson);
      $('#model').html(marked(markdown));
    } catch (e) {
      console.error(e);
    }
  }

  $('#go').click(go);

});
