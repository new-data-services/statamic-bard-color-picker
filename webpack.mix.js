const mix = require('laravel-mix');

mix
    .js('resources/js/bard.js', 'dist/js/bard-color-picker.js').vue({ version: 2 })
    .copy('node_modules/@simonwep/pickr/dist/themes', 'dist/css');
