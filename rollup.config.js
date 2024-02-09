import svelte from 'rollup-plugin-svelte';
import resolve from '@rollup/plugin-node-resolve';
import css from 'rollup-plugin-css-only';
import terser from '@rollup/plugin-terser';
import image from '@rollup/plugin-image';

export default [
    {
        input: 'sidepanel/main.js',
        output: {
            file: 'sidepanel/bundle.js',
            format: 'iife',
            //format: 'cjs',
            name: 'App',
        },
        plugins: [
            svelte(),
            css({ output: 'bundle.css' }),
            resolve({ browser: true }),
            terser(),
            image(),
        ]
    },
    {
        input: 'placeholder_tab/main.js',
        output: {
            file: 'placeholder_tab/bundle.js',
            format: 'iife',
            //format: 'cjs',
            name: 'App',
        },
        plugins: [
            svelte(),
            css({ output: 'bundle.css' }),
            resolve({ browser: true }),
            terser(),
        ]
    },
    {
        input: 'desktop/main.js',
        output: {
            file: 'desktop/bundle.js',
            format: 'iife',
            //format: 'cjs',
            name: 'App',
        },
        plugins: [
            svelte(),
            css({ output: 'bundle.css' }),
            resolve({ browser: true }),
            terser(),
        ]
    },


];