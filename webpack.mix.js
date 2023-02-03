const mix = require('laravel-mix');

mix
    .js('resources/js/bard.js', 'dist/js/bard-color-picker.js').vue({ version: 2 })
    .sass('resources/scss/classic.scss', 'dist/css')
    .sass('resources/scss/monolith.scss', 'dist/css')
    .sass('resources/scss/nano.scss', 'dist/css');
