import { Color } from './Color.js'
import ColorPanel from './ColorPanel.vue'

Statamic.booting(() => {
    Statamic.$bard.addExtension(() => Color)

    Statamic.$bard.buttons((buttons, button) => {
        const indexOfColorButton = _.findIndex(buttons, (btn) => btn === 'color')

        buttons.splice(indexOfColorButton + 1, 0, button({
            name: 'color',
            text: __('bard-color-picker::general.text_color'),
            command: (editor) => editor.commands.setColor(),
            component: ColorPanel,
        }))
    })
})
