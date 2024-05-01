import tinycolor from 'tinycolor2'

const { Mark } = Statamic.$bard.tiptap.core

function isLightColor(color) {
    const processedColor = tinycolor(color)

    if (! processedColor.isValid()) {
        return false
    }

    return processedColor.getBrightness() > 175 || processedColor.getAlpha() < 0.25
}

export const Color = Mark.create({
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
