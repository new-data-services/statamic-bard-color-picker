<!-- statamic:hide -->

# Statamic Bard Text Color

Text color picker with swatches for Bard fields.

<!-- /statamic:hide -->

## Features

- Set text color in Bard fields
- Configurable color swatches for predefined colors
- And a color picker for individual colors
- Seamless integration with Statamic's Control Panel design
- Full support for Statamic themes and dark mode

## Installation

Require it using Composer:

``` bash
composer require ndx/statamic-bard-color-picker
```

## How to use

Open the blueprint or fieldset containing your Bard field, then activate the text color button in the field settings.

![Preview of open text color panel](docs/preview.png)

## Configuration

To define swatches or disable the color picker, publish the configuration file:

``` bash
php artisan vendor:publish --tag=bard-color-picker-config
```

See the [configuration file](config/bard-color-picker.php) for available options.

## About us

We're a digital agency building web applications with Laravel and websites with Statamic – from initial concept to long-term maintenance.

[new-data-services.de](https://new-data-services.de/)

<!-- statamic:hide -->

---

<a href="https://packagist.org/packages/ndx/statamic-bard-color-picker"><img src="https://img.shields.io/packagist/v/ndx/statamic-bard-color-picker?style=for-the-badge"></a>
<a href="https://packagist.org/packages/ndx/statamic-bard-color-picker"><img src="https://img.shields.io/packagist/dt/ndx/statamic-bard-color-picker?style=for-the-badge"></a>

<!-- /statamic:hide -->
