<?php

namespace Ndx\BardColorPicker;

use Ndx\BardColorPicker\Marks\TextColor;
use Statamic\Fieldtypes\Bard\Augmentor;
use Statamic\Providers\AddonServiceProvider;
use Statamic\Statamic;

class ServiceProvider extends AddonServiceProvider
{
    public function boot()
    {
        parent::boot();

        Augmentor::addExtension('textColor', new TextColor());
    }

    public function bootAddon(): void
    {
        $name    = $this->getAddon()->packageName();
        $version = $this->getAddon()->version();

        $this->publishes([
            __DIR__ . '/../dist/js/addon.js'   => public_path("vendor/{$name}/js/addon.js"),
            __DIR__ . '/../dist/css/addon.css' => public_path("vendor/{$name}/css/addon.css"),
        ], 'bard-color-picker-assets');

        Statamic::script($name, "addon.js?v={$version}");
        Statamic::style($name, "addon.css?v={$version}");

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
