const mix = require("laravel-mix");

mix.js("resources/js/addon.js", "dist/js/addon.js").vue({ version: 2 });
