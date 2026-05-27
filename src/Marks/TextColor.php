<?php

namespace Ndx\BardColorPicker\Marks;

use Tiptap\Core\Mark;
use Tiptap\Utils\HTML;
use Tiptap\Utils\InlineStyle;

class TextColor extends Mark
{
    public static $name = 'textColor';

    public function addAttributes()
    {
        return [
            'color' => [
                'parseHTML' => function ($DOMNode) {
                    $attribute = InlineStyle::getAttribute($DOMNode, 'color');

                    if ($attribute === null) {
                        return null;
                    }

                    return preg_replace('/[\'"]+/', '', $attribute);
                },
                'renderHTML' => function ($attributes) {
                    if (! $attributes?->color) {
                        return null;
                    }

                    return ['style' => "color: {$attributes->color}"];
                },
            ],
        ];
    }

    public function parseHTML()
    {
        return [
            [
                'tag'      => 'span',
                'getAttrs' => fn ($DOMNode) => InlineStyle::getAttribute($DOMNode, 'color') ? null : false,
            ],
        ];
    }

    public function renderHTML($mark, $HTMLAttributes = [])
    {
        return ['span', HTML::mergeAttributes($HTMLAttributes), 0];
    }
}
