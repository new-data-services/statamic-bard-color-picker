<template>
    <popover name="ndx-color-picker" class="ndx-color-picker" placement="bottom-start">
        <template #trigger>
            <button
            v-html="button.html"
            v-tooltip="button.text"
            class="bard-toolbar-button"
            :class="{ 'active' : currentColor }"
            :aria-label="button.text"
            :style="`color: ${currentColor ? currentColor : 'inherit'};`"
        />
        </template>
        <template #default="{ close: closePopover }">
            <div class="ndx-color-picker-container">
                <div v-if="colorFieldtypeConfig.swatches.length" class="ndx-color-picker-swatches-container">
                    <div
                        v-for="swatch in colorFieldtypeConfig.swatches"
                        :key="swatch"
                        class="ndx-color-picker-swatch"
                        :style="{ 'background-color': swatch }"
                        @click="() => { setColor(swatch); closePopover(); }"
                    >
                        <div
                            v-if="swatch === currentColor"
                            class="ndx-color-picker-swatch-selected-icon-container"
                        >
                            <div class="ndx-color-picker-swatch-selected-icon">
                                <svg version="1.1" role="presentation" width="12" height="12" viewBox="0 0 1792 1792" class="text-white fill-current"><path d="M1671 566q0 40-28 68l-724 724-136 136q-28 28-68 28t-68-28l-136-136-362-362q-28-28-28-68t28-68l136-136q28-28 68-28t68 28l294 295 656-657q28-28 68-28t68 28l136 136q28 28 28 68z" ></path></svg>
                            </div>
                        </div>
                    </div>
                </div>

                <div
                    v-if="colorFieldtypeConfig.allow_any"
                    class="ndx-color-picker-input-container"
                    :class="{ 'swatches-spacing': colorFieldtypeConfig.swatches.length }"
                >
                    <input
                        class="input-text rtl:ml-2 ltr:mr-2"
                        type="color"
                        :value="currentColor"
                        @input="customColorSelected"
                    />
                    <button
                        class="btn btn-primary"
                        v-text="__('OK')"
                        @click="() => {
                            setColor(customColor)
                            closePopover()
                        }"
                    />
                </div>

                <button
                    class="btn ndx-color-picker-reset-button"
                    v-text="__('Reset')"
                    @click="() => {
                        setColor(null)
                        closePopover()
                    }"
                />
            </div>
        </template>
    </popover>

</template>

<script>
    export default {
        mixins: [BardToolbarButton],

        data() {
            return {
                color: '#000',
                customColor: '#000',
                colorFieldtypeConfig: {
                    allow_any: true,
                    swatches: [],
                },
            }
        },

        computed: {
            currentColor() {
                return this.editor.getAttributes('textColor')?.color
            }
        },

        methods: {
            customColorSelected(event) {
                this.customColor = event.target.value
            },

            setColor(color) {
                this.editor.commands.setColor({ color })
            },
        },

        mounted() {
            this.colorFieldtypeConfig = { ...this.colorFieldtypeConfig, ...Statamic.$config.get('bard-color-picker') };
        },
    }
</script>
