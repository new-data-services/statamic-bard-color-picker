<template>
    <button
        v-html="button.html"
        v-tooltip="button.text"
        class="bard-toolbar-button"
        :class="{ 'active' : currentColor }"
        :aria-label="button.text"
        :style="`color: ${currentColor ? currentColor : 'inherit'};`"
        ref="pickr"
    />
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
