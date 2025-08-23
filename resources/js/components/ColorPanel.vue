<template>
    <Popover class="ndx-text-color-panel" v-model:open="panelOpen">
        <template #trigger>
            <Button
                variant="ghost"
                size="sm"
                v-tooltip="button.text"
                :aria-label="button.text"
                class="ndx-text-color-trigger"
                :class="{ 'active' : currentTextColor }"
                :style="buttonColorStyle"
            >
                <div class="flex items-center" v-html="button.html" />
            </Button>
        </template>

        <template #default>
            <div v-if="colorPickerConfig.swatches.length" class="ndx-text-color-swatches">
                <button
                    v-if="! colorPickerConfig.allow_any"
                    :aria-label="__('bard-color-picker::general.no_color')"
                    @click="() => customColorFromSwatch(null)"
                    class="ndx-text-color-swatch-reset"
                >
                    <Icon name="checkmark" v-if="! customColor" />
                </button>

                <button
                    v-for="swatch in colorPickerConfig.swatches"
                    :key="swatch"
                    @click="() => customColorFromSwatch(swatch)"
                    :style="{ 'background-color': swatch }"
                >
                    <Icon name="checkmark" v-if="customColor && swatch.toLowerCase() === customColor.toLowerCase()" />
                </button>
            </div>

            <div
                v-if="colorPickerConfig.allow_any"
                class="ndx-text-color-form"
            >
                <div class="ndx-text-color-input">
                    <Input
                        type="color"
                        :value="customColor || '#ffffff'"
                        @input="event => customColorFromPicker(event.target.value)"
                    />

                    <span v-if="! customColor" class="ndx-text-color-placeholder"></span>
                </div>

                <Button
                    icon="x"
                    :aria-label="__('Remove')"
                    :disabled="! customColor"
                    @click="() => customColorFromPicker(null)"
                    round
                    inset
                    size="sm"
                    variant="ghost"
                    class="ndx-text-color-reset"
                />

                <Button
                    :text="__('OK')"
                    variant="primary"
                    @click="() => setTextColor()"
                />
            </div>
        </template>
    </Popover>
</template>

<script>
    import { ToolbarButtonMixin } from '@statamic/cms/bard'
    import { Popover, Button, Input, Icon } from '@statamic/cms/ui'
    import { covertToHex } from '../helpers'

    export default {
        mixins: [ToolbarButtonMixin],

        components: {
            Popover,
            Button,
            Input,
            Icon,
        },

        data() {
            return {
                colorPickerConfig: {
                    allow_any: true,
                    swatches: [],
                },
                customColor: null,
                panelOpen: false,
            }
        },

        computed: {
            currentTextColor() {
                return this.editor.getAttributes('textColor')?.color
            },

            buttonColorStyle() {
                if (this.currentTextColor) {
                    return {
                        color: this.currentTextColor
                    }
                }
                return {}
            },
        },

        methods: {
            customColorFromSwatch(color) {
                this.customColor = color

                if (! this.colorPickerConfig.allow_any) {
                    this.setTextColor()
                }
            },

            customColorFromPicker(color) {
                this.customColor = color
            },

            setTextColor() {
                if (this.editor.state.selection.empty) {
                    this.editor.commands.extendMarkRange('textColor')
                }

                this.editor.commands.setTextColor({ color: this.customColor })

                this.panelOpen = false
            },
        },

        watch: {
            panelOpen(panelOpen) {
                if (panelOpen) {
                    this.customColor = covertToHex(this.currentTextColor ?? '')
                } else {
                    this.editor.commands.focus()
                }
            }
        },

        mounted() {
            this.colorPickerConfig = {
                ...this.colorPickerConfig,
                ...Statamic.$config.get('bard-color-picker'),
            }
        },
    }
</script>
