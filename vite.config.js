import react from '@vitejs/plugin-react';
import laravel from 'laravel-vite-plugin';
import tailwindcss from 'tailwindcss'; // Impor ini tidak ada
import { defineConfig } from 'vite';

export default defineConfig({
    plugins: [
        laravel({
            input: 'resources/js/app.jsx',
            refresh: true,
        }),
        react(),
        tailwindcss(), // Plugin tailwindcss tidak diperlukan di sini
    ],
});
