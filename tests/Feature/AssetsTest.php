<?php

use Illuminate\Http\Request;
use Statamic\Statamic;

it('adds necessary js assets', function () {
    $availableScripts = Statamic::availableScripts(Request::create('/'));

    expect($availableScripts['statamic-bard-color-picker'])
        ->toContain('bard-color-picker.js?v=1.0.0');
});

it('adds necessary css assets', function () {
    $availableStyles = Statamic::availableStyles(Request::create('/'));

    expect($availableStyles['statamic-bard-color-picker'])
        ->toContain('nano.css?v=1.0.0');
});
