<?php

it('renders text color marks', function () {

    $bard = new \Statamic\Fieldtypes\Bard();

    $content = [
        [
            'type' => 'paragraph',
            'content' => [
                [
                    'type' => 'text',
                    'marks' => [[
                        'type' => 'textColor',
                        'attrs' => ['color' => '#01D7B0'],
                    ]],
                    'text' => 'And the world will be as one',
                ],
            ],
        ],
    ];

    $this->assertEquals($bard->augment($content), '<p><span style="color: #01D7B0;">And the world will be as one</span></p>');
});
