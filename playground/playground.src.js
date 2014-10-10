$(function () {

  'use strict';

  var React = require('react');
  var t = require('tcomb-form');
  var doc = require('../index');
  var marked = require('marked');

  function go() {
    try {
      var json = JSON.parse($('#payload').val());
      var Main = doc.guesser(json);
      var model = doc.parse(Main);
      var markdown = doc.toMarkdown(model);
      $('#model').html(marked(markdown));
    } catch (e) {
      console.error(e);
    }
  }

  $('#go').click(go);

});
