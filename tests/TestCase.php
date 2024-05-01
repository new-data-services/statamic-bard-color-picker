<?php

namespace Ndx\BardColorPicker\Tests;

use Orchestra\Testbench\TestCase as OrchestraTestCase;

class TestCase extends OrchestraTestCase
{
    protected function getPackageProviders($app): array
    {
        return [
            \Statamic\Providers\StatamicServiceProvider::class,
            \Ndx\BardColorPicker\ServiceProvider::class,
        ];
    }

    protected function resolveApplicationConfiguration($app)
    {
        parent::resolveApplicationConfiguration($app);

        $app['config']->set('statamic.users.repository', 'file');
    }
}
