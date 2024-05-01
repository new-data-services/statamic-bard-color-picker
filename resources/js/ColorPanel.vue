<template>
    <button
        v-tooltip="button.text"
        class="bard-toolbar-button"
        :class="{ 'active' : currentColor }"
        :aria-label="button.text"
        :style="`color: ${currentColor ? currentColor : 'inherit'};`"
        ref="pickr"
    >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
            <path fill="currentColor" d="M5.2 9.7c-1.2 0-2.4.5-3 2.2-.1.2-.3.3-.5.3-.3 0-1.4-.8-1.7-1C0 13.8 1.2 16 4 16c2.4 0 4-1.4 4-3.8V12L5.2 9.7ZM14.3 0a2 2 0 0 0-1.2.5C6.7 6.2 6 6.3 6 8c0 .5 0 .9.3 1.3l2 1.6.7.1c2 0 3-1.4 6.6-8 .2-.5.4-1 .4-1.4 0-1-.8-1.6-1.7-1.6Z"/>
        </svg>
    </button>
</template>

<script>
    /* global BardToolbarButton */
    import Pickr from '@simonwep/pickr'

    export default {
        mixins: [BardToolbarButton],

        data() {
            return {
                pickr: null,
                config: null,
                defaultColor: '#000',
            }
        },

        computed: {
            currentColor() {
                return this.editor.getAttributes('textColor')?.color
            }
        },

        methods: {
            setColor(color) {
                this.editor.commands.setColor({ color })

                this.pickr.hide()
            },
        },

        mounted() {
            this.config = Statamic.$config.get('bard-color-picker')

            this.pickr = new Pickr({
                el: this.$refs.pickr,
                container: '#statamic',
                default: this.defaultColor,
                defaultRepresentation: ['hex', 'rgba', 'hsla', 'hsva', 'cmyk'].find(interaction => this.config.interactions[interaction]),
                theme: this.config.theme,
                components: {
                    preview: !! this.config.components.preview,
                    opacity: !! this.config.components.opacity,
                    hue: !! this.config.components.hue,
                    interaction: {
                        hex: !! this.config.interactions.hex,
                        rgba: !! this.config.interactions.rgba,
                        hsla: !! this.config.interactions.hsla,
                        hsva: !! this.config.interactions.hsva,
                        cmyk: !! this.config.interactions.cmyk,
                        input: !! this.config.interactions.input,
                        clear: true,
                        save: true
                    }
                },
                outputPrecision: 1,
                i18n: {
                    'btn:save': __('Save'),
                    'btn:clear': __('Clear'),
                },
                useAsButton: true,
                swatches: Object.values(this.config.recommended),
            }).on('show', () => {
                if (this.editor.state.selection.empty) {
                    this.editor.commands.extendMarkRange('textColor')
                }

                this.pickr.setColor(this.currentColor || this.defaultColor, true)
            }).on('save', (hSVaColorObject, pickrInstance) => {
                const rep = pickrInstance.getColorRepresentation()

                const color = hSVaColorObject && rep
                    ? hSVaColorObject['to' + rep]().toString()
                    : false

                this.setColor(color)
            })
        },
    }
</script>
