const mix = require('laravel-mix');

mix
    .js('resources/js/addon.js', 'dist/js').vue({ version: 2 })
    .sass('resources/scss/addon.scss', 'dist/css');
