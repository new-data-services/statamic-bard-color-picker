<?php

use Statamic\Fieldtypes\Bard;

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

    $this->assertEquals(
        (new Bard)->augment($content),
        '<p><span style="color: #01D7B0;">And the world will be as one</span></p>'
    );
});
