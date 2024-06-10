<?php

namespace Ndx\BardColorPicker\Marks;

use Tiptap\Core\Mark;
use Tiptap\Utils\HTML;

class TextColor extends Mark
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
