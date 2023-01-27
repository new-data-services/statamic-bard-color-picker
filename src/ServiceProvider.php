<?php

namespace Ndx\BardColorPicker;

use Statamic\Statamic;
use Statamic\Fieldtypes\Bard\Augmentor;
use Statamic\Providers\AddonServiceProvider;

class ServiceProvider extends AddonServiceProvider
{
    protected $scripts = [
        __DIR__ . '/../dist/js/bard-color-picker.js',
    ];

    protected $stylesheets = [
        __DIR__ . '/../dist/css/classic.min.css',
        __DIR__ . '/../dist/css/monolith.min.css',
        __DIR__ . '/../dist/css/nano.min.css',
    ];

    public function bootAddon()
    {
        Augmentor::addExtension('color', new Color());

        $this->bootAddonStylesheets();
    }

    protected function bootConfig(): self
    {
        $this->mergeConfigFrom(__DIR__ . '/../config/bard-color-picker.php', 'statamic.bard-color-picker');

        $this->publishes([
            __DIR__ . '/../config/bard-color-picker.php' => config_path('statamic/bard-color-picker.php'),
        ], 'bard-color-picker-config');

        Statamic::provideToScript([
            'bard-color-picker' => config('statamic.bard-color-picker'),
        ]);

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

    protected function bootStylesheets(): self
    {
        // skip default behaviour
        return $this;
    }

    protected function bootAddonStylesheets(): void
    {
        $theme = config('statamic.bard-color-picker.theme', 'nano');

        $this->registerStylesheet(__DIR__ . "/../dist/css/{$theme}.min.css");
    }
}
