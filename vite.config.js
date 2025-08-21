import { defineConfig } from 'vite'
import laravel from 'laravel-vite-plugin'
import statamic from '@statamic/cms/vite-plugin'

export default defineConfig({
    plugins: [
        statamic(),
        laravel({
            hotFile: 'dist/vite.hot',
            input: [
                'resources/js/addon.js',
                'resources/css/addon.css',
            ],
            publicDirectory: 'dist',
        }),
    ],
    css: { postcss: __dirname },
})
