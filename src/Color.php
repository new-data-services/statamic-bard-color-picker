<?php

namespace Nds\StatamicBardColors;

use ProseMirrorToHtml\Marks\Mark;

class Color extends Mark
{
    protected $markType = 'color';

    protected $tagName = 'span';

    public function matching(): bool
    {
        return $this->mark->type === $this->markType;
    }

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
