<template>
    <Popover ref="popover" :inset="true" v-model:open="panelOpen">
        <template #trigger>
            <Button
                variant="ghost"
                size="sm"
                v-tooltip="button.text"
                :aria-label="button.text"
                class="px-2!"
                :class="{ 'active' : currentTextColor }"
                :style="buttonColorStyle"
            >
                <div class="flex items-center" v-html="button.html" />
            </Button>
        </template>

        <template #default>
            <div class="ndx-text-color">
                <div v-if="colorPickerConfig.swatches.length" class="ndx-text-color-swatches">
                    <button
                        v-if="! colorPickerConfig.allow_any"
                        v-tooltip="__('bard-color-picker::general.no_color')"
                        :aria-label="__('bard-color-picker::general.no_color')"
                        @click="() => customColorFromSwatch(null)"
                        class="ndx-text-color-swatch-reset"
                    >
                        <svg v-if="! customColor" width="12" height="12" viewBox="0 0 12 12" fill="#fff">
                            <path d="M11.1897 3.79018C11.1897 3.96875 11.1272 4.12054 11.0022 4.24554L6.15402 9.09375L5.2433 10.0045C5.1183 10.1295 4.96652 10.192 4.78795 10.192C4.60938 10.192 4.45759 10.1295 4.33259 10.0045L3.42188 9.09375L0.997768 6.66964C0.872768 6.54464 0.810268 6.39286 0.810268 6.21429C0.810268 6.03571 0.872768 5.88393 0.997768 5.75893L1.90848 4.84821C2.03348 4.72321 2.18527 4.66071 2.36384 4.66071C2.54241 4.66071 2.6942 4.72321 2.8192 4.84821L4.78795 6.82366L9.1808 2.42411C9.3058 2.29911 9.45759 2.23661 9.63616 2.23661C9.81473 2.23661 9.96652 2.29911 10.0915 2.42411L11.0022 3.33482C11.1272 3.45982 11.1897 3.61161 11.1897 3.79018Z"/>
                        </svg>
                    </button>

                    <button
                        v-for="swatch in colorPickerConfig.swatches"
                        :key="swatch"
                        @click="() => customColorFromSwatch(swatch)"
                        :style="{ 'background-color': swatch }"
                    >
                        <svg v-if="customColor && swatch.toLowerCase() === customColor.toLowerCase()" width="12" height="12" viewBox="0 0 12 12" fill="#fff">
                            <path d="M11.1897 3.79018C11.1897 3.96875 11.1272 4.12054 11.0022 4.24554L6.15402 9.09375L5.2433 10.0045C5.1183 10.1295 4.96652 10.192 4.78795 10.192C4.60938 10.192 4.45759 10.1295 4.33259 10.0045L3.42188 9.09375L0.997768 6.66964C0.872768 6.54464 0.810268 6.39286 0.810268 6.21429C0.810268 6.03571 0.872768 5.88393 0.997768 5.75893L1.90848 4.84821C2.03348 4.72321 2.18527 4.66071 2.36384 4.66071C2.54241 4.66071 2.6942 4.72321 2.8192 4.84821L4.78795 6.82366L9.1808 2.42411C9.3058 2.29911 9.45759 2.23661 9.63616 2.23661C9.81473 2.23661 9.96652 2.29911 10.0915 2.42411L11.0022 3.33482C11.1272 3.45982 11.1897 3.61161 11.1897 3.79018Z"/>
                        </svg>
                    </button>
                </div>

                <div
                    v-if="colorPickerConfig.allow_any"
                    class="ndx-text-color-form"
                >
                    <div class="input-text">
                        <div class="ndx-text-color-input">
                            <input
                                type="color"
                                :value="customColor || '#ffffff'"
                                @input="event => customColorFromPicker(event.target.value)"
                            />

                            <span v-if="! customColor" class="ndx-text-color-placeholder"></span>
                        </div>

                        <button
                            :aria-label="__('Remove')"
                            :disabled="! customColor"
                            @click="() => customColorFromPicker(null)"
                            class="ndx-text-color-reset"
                        >×</button>
                    </div>

                    <button
                        class="btn btn-primary"
                        v-text="__('OK')"
                        @click="() => setTextColor()"
                    />
                </div>
            </div>
        </template>
    </Popover>
</template>

<script>
    import { ToolbarButtonMixin } from '@statamic/cms/bard'
    import { Popover } from '@statamic/cms/ui'
    import { covertToHex } from '../helpers'

    export default {
        mixins: [ToolbarButtonMixin],

        components: {
            Popover,
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
