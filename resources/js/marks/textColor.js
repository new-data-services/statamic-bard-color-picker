import { inspectColor } from './../helpers.js'

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
        const { isDarkColor, isLightColor } = inspectColor(HTMLAttributes.color)

        return ['span', {
            style: `color: ${HTMLAttributes.color};`,
            ...(isDarkColor && { 'data-dark-color': true }),
            ...(isLightColor && { 'data-light-color': true }),
        }, 0]
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
