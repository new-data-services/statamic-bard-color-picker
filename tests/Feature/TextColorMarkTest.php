<?php

use Statamic\Fieldtypes\Bard;

describe('rendering', function () {
    it('renders text color marks', function () {
        $content = [
            [
                'type'    => 'paragraph',
                'content' => [
                    [
                        'type'  => 'text',
                        'marks' => [[
                            'type'  => 'textColor',
                            'attrs' => ['color' => '#01D7B0'],
                        ]],
                        'text' => 'And the world will be as one',
                    ],
                ],
            ],
        ];

        expect((new Bard)->augment($content))
            ->toBe('<p><span style="color: #01D7B0;">And the world will be as one</span></p>');
    });
});

describe('parsing', function () {
    it('parses text color marks from html', function () {
        $html = '<p><span style="color: #01D7B0;">And the world will be as one</span></p>';

        $value = (new Bard)->preProcess($html);

        $textNode = $value[0]['content'][0];

        expect($textNode['text'])->toBe('And the world will be as one');
        expect($textNode['marks'])->toEqual([[
            'type'  => 'textColor',
            'attrs' => ['color' => '#01D7B0'],
        ]]);
    });

    it('strips quotes from parsed color values', function () {
        $html = '<p><span style="color: \'#01D7B0\';">Quoted color</span></p>';

        $value = (new Bard)->preProcess($html);

        $textNode = $value[0]['content'][0];

        expect($textNode['marks'][0]['attrs']['color'])->toBe('#01D7B0');
    });

    it('does not parse spans without color style as text color marks', function () {
        $html = '<p><span class="highlight">No color here</span></p>';

        $value = (new Bard)->preProcess($html);

        $textNode = $value[0]['content'][0];

        expect($textNode['text'])->toBe('No color here');
        expect($textNode['marks'] ?? null)->toBeNull();
    });
});
