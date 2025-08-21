import ColorPanel from './components/ColorPanel.vue'
import TextColor from './marks/textColor.js'

Statamic.booting(() => {
    Statamic.$bard.addExtension(({ tiptap }) => TextColor(tiptap))

    Statamic.$bard.buttons((buttons, button) => {
        buttons.splice(buttons.indexOf('color'), 0, button({
            name: 'color',
            text: __('bard-color-picker::general.text_color'),
            html: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor"><path d="M5.2 9.7c-1.2 0-2.4.5-3 2.2-.1.2-.3.3-.5.3-.3 0-1.4-.8-1.7-1C0 13.8 1.2 16 4 16c2.4 0 4-1.4 4-3.8V12L5.2 9.7ZM14.3 0a2 2 0 0 0-1.2.5C6.7 6.2 6 6.3 6 8c0 .5 0 .9.3 1.3l2 1.6.7.1c2 0 3-1.4 6.6-8 .2-.5.4-1 .4-1.4 0-1-.8-1.6-1.7-1.6Z"/></svg>',
            command: (editor) => editor.commands.setColor(),
            component: ColorPanel,
        }))
    })
})
