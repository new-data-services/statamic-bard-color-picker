import Color from './color';
import ColorPanel from './ColorPanel.vue';

Statamic.$bard.extend(({ mark }) => mark(new Color()));

Statamic.$bard.buttons((buttons, button) => {
    const indexOfColorButton = _.findIndex(buttons, (btn) => btn === 'color');

    buttons.splice(indexOfColorButton + 1, 0, button({
        name: 'color',
        text: __('bard-color-picker::general.text_color'),
        command: 'color',
        icon: 'paint-brush text-color-button',
        component: ColorPanel,
    }));
});
