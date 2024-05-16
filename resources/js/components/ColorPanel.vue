<template>
    <button
        v-html="button.html"
        v-tooltip="button.text"
        class="bard-toolbar-button"
        :class="{ 'active' : currentColor }"
        :aria-label="button.text"
        :style="`color: ${currentColor ? currentColor : 'inherit'};`"
        @click="toggleActive"
    />
</template>

<script>
    export default {
        mixins: [BardToolbarButton],

        data() {
            return {
                color: '#000',
                isActive: false,
            }
        },

        computed: {
            currentColor() {
                return this.editor.getAttributes('textColor')?.color
            }
        },

        methods: {
            toggleActive() {
                this.isActive = ! this.isActive
            },
            setColor(color) {
                this.editor.commands.setColor({ color })
            },
        },

        mounted() {
            this.config = Statamic.$config.get('bard-color-picker')
        },
    }
</script>
