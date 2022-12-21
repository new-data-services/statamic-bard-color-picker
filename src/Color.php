<?php

namespace Ndx\BardColorPicker;

use ProseMirrorToHtml\Marks\Mark;

class Color extends Mark
{
    protected $markType = 'color';

    protected $tagName = 'span';

    public function tag(): ?array
    {
        return [
            [
                'tag'   => 'span',
                'attrs' => [
                    'style' => "color: {$this->mark->attrs->color};",
                ],
            ],
        ];
    }
}
