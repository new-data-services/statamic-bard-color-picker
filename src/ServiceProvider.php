<?php

namespace Ndx\BardColorPicker;

use Statamic\Statamic;
use Statamic\Fieldtypes\Bard\Augmentor;
use Statamic\Providers\AddonServiceProvider;

class ServiceProvider extends AddonServiceProvider
{
    public function boot()
    {
        parent::boot();

        Augmentor::addExtension('color', new Color());
    }

    public function bootAddon(): void
    {
        $name    = $this->getAddon()->packageName();
        $version = $this->getAddon()->version();
        $theme   = config('statamic.bard-color-picker.theme', 'nano');

        $this->publishes([
            __DIR__ . '/../dist/js/bard-color-picker.js' => public_path("vendor/{$name}/js/bard-color-picker.js"),
            __DIR__ . '/../dist/css/classic.css'         => public_path("vendor/{$name}/css/classic.css"),
            __DIR__ . '/../dist/css/monolith.css'        => public_path("vendor/{$name}/css/monolith.css"),
            __DIR__ . '/../dist/css/nano.css'            => public_path("vendor/{$name}/css/nano.css"),
        ], 'bard-color-picker-assets');

        Statamic::script($name, "bard-color-picker.js?v={$version}");
        Statamic::style($name, "{$theme}.css?v={$version}");

        Statamic::afterInstalled(function ($command) {
            $command->call('vendor:publish', ['--tag' => 'bard-color-picker-assets', '--force' => true]);
        });
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
