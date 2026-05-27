<?php

use Illuminate\Http\Request;
use Statamic\Statamic;

describe('assets', function () {
    it('registers vite assets', function () {
        $availableVites = Statamic::availableVites(Request::create('/'));

        expect($availableVites['statamic-bard-color-picker']['input'])
            ->toContain('resources/js/addon.js')
            ->toContain('resources/css/addon.css');
    });
});

describe('config', function () {
    it('provides config to frontend scripts', function () {
        $scriptData = Statamic::jsonVariables(Request::create('/'));

        expect($scriptData['bard-color-picker'])->toBeArray()
            ->toHaveKeys(['swatches', 'allow_any']);
    });
});
