<!-- statamic:hide -->

# Bard Color Picker

<!-- /statamic:hide -->

> Text color picker with swatches for Bard fields.

## Features

- Set text color in Bard fields
- Customizable layouts
- Predefined color swatches
- Support for HEX, RGB, CMYK and more
- Beautiful and easy to use color panel

## Installation

You can search for this addon in the `Tools > Addons` section of the Statamic control panel and click **install** or require it using Composer:

``` bash
composer require ndx/statamic-bard-color-picker
```

## How to use

Open the blueprint or fieldset that contains your Bard field, open the settings of that field and activate the text color button. 

![Preview of open text color panel](docs/preview.png)

## Configuration

If you want to change the layout, components or predefined colors, make sure that the configuration file is published by entering the following command:

``` bash
php artisan vendor:publish --tag=bard-color-picker-config
```

This addon uses the [@simonwep/pickr](https://github.com/Simonwep/pickr) package under the hood and supports many configuration options including different layouts.

Have a look at the [configuration file](config/bard-color-picker.php) for details.

## About us

We develop digital solutions for all kinds of disciplines. From the idea and concepts to implementation and operation.

Visit our website: [new-data-services.de](https://new-data-services.de/)

<!-- statamic:hide -->

---

<a href="https://statamic.com/addons/new-data-services/bard-color-picker"><img src="https://img.shields.io/badge/Statamic-3.4+-FF269E?style=for-the-badge"></a>
<a href="https://packagist.org/packages/ndx/statamic-bard-color-picker"><img src="https://img.shields.io/packagist/v/ndx/statamic-bard-color-picker?style=for-the-badge"></a>
<a href="https://packagist.org/packages/ndx/statamic-bard-color-picker"><img src="https://img.shields.io/packagist/dt/ndx/statamic-bard-color-picker?style=for-the-badge"></a>

<!-- /statamic:hide -->
