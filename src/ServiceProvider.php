<?php

namespace Ndx\BardColorPicker;

use Statamic\Statamic;
use Statamic\Fieldtypes\Bard\Augmentor;
use Statamic\Providers\AddonServiceProvider;

class ServiceProvider extends AddonServiceProvider
{
    protected $publishAfterInstall = false;

    protected $scripts = [
        __DIR__ . '/../dist/js/addon.js',
    ];

    public function bootAddon()
    {
        Augmentor::addMark(Color::class);
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
}
