<?php

return [

    /*
    |--------------------------------------------------------------------------
    | Pickr theme
    |--------------------------------------------------------------------------
    |
    | Set the pickr theme
    | https://simonwep.github.io/pickr/
    | Supported: "classic", "monolith", "nano"
    |
    */

    'theme' => 'nano',

    /*
    |--------------------------------------------------------------------------
    | Main components
    |--------------------------------------------------------------------------
    */

    'components' => [
        'preview' => true, // comparison between old and new color
        'opacity' => true, // opacity slider
        'hue'     => true, // hue slider
    ],

    /*
    |--------------------------------------------------------------------------
    | Pickr swatches (recommended colors)
    |--------------------------------------------------------------------------
    */

    'recommended' => [
        //'#FF269E',
        //'#01D7B0',
    ],

    /*
    |--------------------------------------------------------------------------
    | Input / output options
    |--------------------------------------------------------------------------
    */

    'interactions' => [
        'hex'   => false,
        'rgba'  => false,
        'hsla'  => false,
        'hsva'  => false,
        'cmyk'  => false,
        'input' => false,
    ],

];
