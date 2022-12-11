<?php

namespace Nds\StatamicBardColors;

use Statamic\Statamic;
use Statamic\Fieldtypes\Bard\Augmentor;
use Statamic\Providers\AddonServiceProvider;

class ServiceProvider extends AddonServiceProvider
{
    protected $publishAfterInstall = false;

    protected $scripts = [
        __DIR__ . '/../dist/js/addon.js',
    ];

    public function register()
    {
        parent::register();

        $this->mergeConfigFrom(__DIR__ . '/../config/colors.php', 'statamic.bard-text-colors');
    }

    public function boot()
    {
        parent::boot();

        if ($this->app->runningInConsole()) {
            $this->publishes([
                __DIR__ . '/../config/colors.php' => config_path('statamic/bard-text-colors.php'),
            ], 'statamic-bard-colors');
        }

        Statamic::provideToScript([
            'bard-text-colors' => config('statamic.bard-text-colors'),
        ]);

        Augmentor::addMark(Color::class);
    }
}
