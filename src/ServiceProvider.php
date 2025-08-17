<?php

namespace Ndx\BardColorPicker;

use Ndx\BardColorPicker\Marks\TextColor;
use Statamic\Fieldtypes\Bard\Augmentor;
use Statamic\Providers\AddonServiceProvider;
use Statamic\Statamic;

class ServiceProvider extends AddonServiceProvider
{
    protected $vite = [
        'hotFile' => __DIR__ . '/../dist/vite.hot',
        'input'   => [
            'resources/js/addon.js',
            'resources/css/addon.css',
        ],
        'publicDirectory' => 'dist',
    ];

    public function boot()
    {
        parent::boot();

        Augmentor::addExtension('textColor', new TextColor);
    }

    protected function bootConfig(): self
    {
        $this->mergeConfigFrom(__DIR__ . '/../config/bard-color-picker.php', 'statamic.bard-color-picker');

        $this->publishes([
            __DIR__ . '/../config/bard-color-picker.php' => config_path('statamic/bard-color-picker.php'),
        ], 'bard-color-picker-config');

        Statamic::provideToScript(['bard-color-picker' => config('statamic.bard-color-picker')]);

        return $this;
    }

    protected function bootTranslations(): self
    {
        $this->loadTranslationsFrom(__DIR__ . '/../lang', 'bard-color-picker');

        $this->publishes([
            __DIR__ . '/../lang' => app()->langPath() . '/vendor/bard-color-picker',
        ], 'bard-color-picker-translations');

        return $this;
    }
}
