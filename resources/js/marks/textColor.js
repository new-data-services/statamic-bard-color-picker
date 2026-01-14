import { inspectColor } from './../helpers.js'

const TextColor = (tiptap) => {
    const { Mark } = tiptap.core

    return Mark.create({
        name: 'textColor',

        addAttributes() {
            return {
                color: {
                    default: null,
                    parseHTML: element => element.style.color?.replace(/['"]+/g, ''),
                    renderHTML: attributes => {
                        if (! attributes.color) {
                            return {}
                        }

                        const { isDarkColor, isLightColor } = inspectColor(attributes.color)

                        return {
                            style: `color: ${attributes.color}`,
                            ...(isDarkColor && { 'data-dark-color': true }),
                            ...(isLightColor && { 'data-light-color': true }),
                        }
                    },
                },
            }
        },

        parseHTML() {
            return [
                {
                    tag: 'span',
                    getAttrs: element => element.style.color ? { color: element.style.color } : false,
                },
            ]
        },

        renderHTML({ HTMLAttributes }) {
            return ['span', HTMLAttributes, 0]
        },

        addCommands() {
            return {
                setTextColor: attributes => ({ chain }) => {
                    if (attributes.color) {
                        return chain().setMark(this.name, attributes).run()
                    }

                    return chain().unsetMark(this.name, { extendEmptyMarkRange: true }).run()
                },
            }
        },
    })
}

export default TextColor
