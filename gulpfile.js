var elixir = require('laravel-elixir');

elixir(function (mix) {
  'use strict';

  mix.browserify(['app.js'], 'dist', 'src');
});
