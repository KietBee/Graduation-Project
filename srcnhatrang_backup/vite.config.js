import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import sassGlob from 'vite-plugin-sass-glob-import';
export default defineConfig({
    plugins: [
        sassGlob(),
        laravel({
            input: [
                'resources/css/app.css',
                'resources/js/app.js',
            ],
            refresh: true,
        }),
    ],
});
