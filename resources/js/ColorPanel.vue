<template>
    <div @click.self.stop="togglePicker()">
        <button
            class="bard-toolbar-button"
            :class="{ active }"
            v-html="button.html"
            v-tooltip="button.text"
            :aria-label="button.text"
            :style="`color: ${activeColor ? activeColor : defaultColor};`"
            ref="pickr"
        />
    </div>
</template>

<script>
    /* global BardToolbarButton */

    import '@simonwep/pickr/dist/themes/classic.min.css';
    import '@simonwep/pickr/dist/themes/monolith.min.css';
    import '@simonwep/pickr/dist/themes/nano.min.css';
    import Pickr from '@simonwep/pickr';

    export default {
        name: 'BardToolbarButtonColorMark',
        mixins: [BardToolbarButton],

        mounted() {
            const { state } = this.editor;
            this.defaultColor = state.schema.marks.textColor.attrs.color.default;

            this.config = Statamic.$config.get('bard-color-picker');

            this.setupPickr();
        },

        data() {
            return {
                pickr: null,
                defaultColor: '#000',
                activeColor: null,
                //this is needed because after setting a color without a mark the cursor gets an update
                //and cant find any mark to set the active color
                dontSetColorOnNextCursorUpdate: false,
                config: null,
                selection: false,
            };
        },

        watch: {
            'editor.state.selection.$cursor': {
                handler(cursor) {
                    this.selection = ! cursor;

                    if (cursor) {
                        const colorMark = cursor.marks().find(mark => mark.type.name === 'textColor');

                        if (this.dontSetColorOnNextCursorUpdate) {
                            this.dontSetColorOnNextCursorUpdate = false;
                        } else if (colorMark) {
                            this.setActiveColor(colorMark.attrs.color);
                        } else {
                            this.setActiveColor(null);
                        }
                    }
                },
                deep: true,
            },
        },

        methods: {
            setupPickr() {
                const defaultRepresentation = this.getPickrDefaultRepresentation();

                this.pickr = new Pickr({
                    el: this.$refs.pickr,
                    default: this.defaultColor,
                    defaultRepresentation,
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
                        'btn:clear': __('Clear')
                    },
                    useAsButton: true,
                    swatches: Object.values(this.config.recommended),
                });

                this.pickr.on('save', (hSVaColorObject, pickrInstance) => {
                    const rep = pickrInstance.getColorRepresentation();
                    if (hSVaColorObject && rep) {
                        // Dynamically call toHEX(), toRGBA(), etc
                        this.setColor(hSVaColorObject['to' + rep]().toString());
                    } else {
                        // Color was manually cleared
                        this.setColor(null);
                    }

                    this.showPicker(false);
                })
                    .on('hide', () => {
                        this.showPicker(false);
                    });
            },

            togglePicker() {
                this.showPicker(! this.pickr.isOpen());
            },

            showPicker(val) {
                if (val) {
                    this.pickr.show();
                } else {
                    this.pickr.hide();
                }
            },

            setActiveColor(color) {
                this.activeColor = color;
                this.pickr.setColor(color, true);
            },

            setColor(color) {
                const { state } = this.editor;
                const cursor = state.selection.$cursor;

                if (color) {
                    this.dontSetColorOnNextCursorUpdate = !! cursor;

                    if (this.selection) {
                        this.editor.commands.setColor({ color });
                    } else {
                        if (this.activeColor) {
                            this.editor.commands.setColor({ color });
                        } else {
                            this.editor.commands.toggleColor({ color });
                        }
                    }
                } else if (this.activeColor) {
                    this.editor.commands.setColor(null);
                }

                this.setActiveColor(color);
                this.showPicker(false);
            },

            getPickrDefaultRepresentation() {
                if (this.config.interactions.hex) {
                    return 'hex';
                }

                if (this.config.interactions.rgba) {
                    return 'rgba';
                }

                if (this.config.interactions.hsla) {
                    return 'hsla';
                }

                if (this.config.interactions.hsva) {
                    return 'hsva';
                }

                if (this.config.interactions.cmyk) {
                    return 'cmyk';
                }

                return null;
            },
        },
    };
</script>
