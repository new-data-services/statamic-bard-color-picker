<?php

namespace Ndx\BardColorPicker\Tests;

use Orchestra\Testbench\TestCase as OrchestraTestCase;
use Statamic\Extend\Manifest;
use Statamic\Statamic;

class TestCase extends OrchestraTestCase
{
    protected function setUp(): void
    {
        parent::setUp();

        $this->withoutVite();
    }

    protected function getPackageProviders($app)
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

    protected function getPackageAliases($app)
    {
        return ['Statamic' => Statamic::class];
    }

    protected function getEnvironmentSetUp($app)
    {
        parent::getEnvironmentSetUp($app);

        $app->make(Manifest::class)->manifest = [
            'ndx/statamic-bard-color-picker' => [
                'id'        => 'ndx/statamic-bard-color-picker',
                'namespace' => 'Ndx\\BardColorPicker',
                'version'   => '1.0.0',
            ],
        ];
    }
}
