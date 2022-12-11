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
    import '@simonwep/pickr/dist/themes/classic.min.css';
    import '@simonwep/pickr/dist/themes/nano.min.css';
    import Pickr from '@simonwep/pickr';

    export default {
        name: 'BardToolbarButtonColorMark',
        mixins: [BardToolbarButton],

        mounted() {
            const { state } = this.editor;
            this.defaultColor = state.schema.marks.color.attrs.color.default;

            this.colorConfig = Statamic.$config.get('bard-text-colors').recommended;
            this.colors = Object.values(this.colorConfig);

            this.setupPickr();
        },

        data() {
            return {
                pickr: null,
                defaultColor: null,
                activeColor: null,
                dontSetColorOnNextCursorUpdate: false,
                colorConfig: null,
                colors: [],
            };
        },

        watch: {
            'editor.state.selection.$cursor': {
                handler(val) {
                    if (val) {
                        const colorMark = val.marks().find(mark => mark.type.name === 'color');

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
                this.pickr = new Pickr({
                    el: this.$refs.pickr,
                    default: this.activeColor,
                    defaultRepresentation: 'hex',
                    components: {
                        preview: true,
                        opacity: true,
                        hue: true,
                        interaction: {
                            hex: true,
                            rgba: true,
                            hsla: true,
                            input: true,
                            clear: true,
                            save: true
                        }
                    },
                    outputPrecision: 1,
                    strings: {
                        save: __('Save'),
                        clear: __('Clear')
                    },
                    useAsButton: true,
                    swatches: this.colors,
                });

                this.pickr.on('save', (...args) => {
                    const rep = args[1].getColorRepresentation();
                    if (args[0] && rep) {
                        // Dynamically call toHEX(), toRGBA(), etc
                        this.setColor(args[0]['to' + rep]().toString(0));
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

                    if (this.activeColor) {
                        this.editor.commands.toggleColor();
                        this.editor.commands.toggleColor({ color });
                    } else {
                        this.editor.commands.toggleColor({ color });
                    }
                } else {
                    this.editor.commands.toggleColor();
                }

                this.setActiveColor(color);
                this.showPicker(false);
            },
        }
    };
</script>
