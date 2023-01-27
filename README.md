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
- Ready for Tiptap 2 (Statamic 3.4)

## Installation

You can search for this addon in the `Tools > Addons` section of the Statamic control panel and click **install** or require it using Composer:

``` bash
composer require ndx/statamic-bard-color-picker
```

You are running **Statamic 3.3.x**? Then use version 1.0 of the addon:

``` bash
composer require ndx/statamic-bard-color-picker "^1.0.0"
```

## How to use

Open the blueprint or fieldset that contains your Bard field, open the settings of that field and activate the text color button. 

![Preview of open text color panel](preview.png "Text color panel")

## Configuration

If you want to change the layout, components or predefined colors, make sure that the configuration file is published by entering the following command:

``` bash
php artisan vendor:publish --tag=bard-color-picker-config
```

This addon uses [Simonwep's Pickr package](https://github.com/Simonwep/pickr) under the hood and supports many configuration options including different layouts.

Have a look at the [configuration file](config/bard-color-picker.php) for details.

## About us

We develop digital solutions for all kinds of disciplines. From the idea and concepts to implementation and operation.

Visit our website: [new-data-services.de](https://new-data-services.de/)
