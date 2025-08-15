<?php

use Illuminate\Http\Request;
use Statamic\Statamic;

it('adds necessary assets', function () {
    $availableVites = Statamic::availableVites(Request::create('/'));

    expect($availableVites['statamic-bard-color-picker']['input'])
        ->toContain('resources/js/addon.js')
        ->toContain('resources/css/addon.css');
});
