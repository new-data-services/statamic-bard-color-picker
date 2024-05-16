import { isLightColor } from './../helpers.js'

const { Mark } = Statamic.$bard.tiptap.core

const TextColor = Mark.create({
    name: 'textColor',

    addAttributes() {
        return {
            color: {
                default: null,
                parseHTML: element => element.style.color?.replace(/['"]+/g, ''),
            },
        }
    },

    renderHTML({ HTMLAttributes }) {
        let style = `color: ${HTMLAttributes.color};`

        if (isLightColor(HTMLAttributes.color)) {
            style += 'text-shadow: 0 0 3px rgba(0, 0, 0, .8);'
        }

        return ['span', { style }, 0]
    },

    addCommands() {
        return {
            setColor: attributes => ({ chain }) => {
                if (attributes.color) {
                    return chain().setMark(this.name, attributes).run()
                }

                return chain().unsetMark(this.name, { extendEmptyMarkRange: true }).run()
            },
        }
    },
})

export default TextColor
