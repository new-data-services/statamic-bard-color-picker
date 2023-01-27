<?php

namespace Ndx\BardColorPicker;

use Tiptap\Core\Mark;
use Tiptap\Utils\HTML;

class Color extends Mark
{
    public static $name = 'textColor';

    public function renderHTML($mark, $HTMLAttributes = [])
    {
        return [
            'span',
            HTML::mergeAttributes(['style' => "color: {$mark->attrs->color};"]),
            0,
        ];
    }
}
