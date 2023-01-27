const { Mark } = Statamic.$bard.tiptap.core;

export const Color = Mark.create({
    name: 'textColor',

    addAttributes() {
        return {
            color: {
                default: null,
                parseHTML: element => element.style.color?.replace(/['"]+/g, ''),
            },
        };
    },

    renderHTML({ HTMLAttributes }) {
        return ['span', { 'style': `color: ${HTMLAttributes.color}` }, 0];
    },

    addCommands() {
        return {
            setColor: attributes => ({ chain }) => {
                if (attributes.color) {
                    return chain().setMark(this.name, attributes).run();
                }

                return chain().unsetMark(this.name, { extendEmptyMarkRange: true }).run();
            },
        };
    },
});
