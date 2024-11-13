import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import { terser } from 'rollup-plugin-terser';
import scss from 'rollup-plugin-scss'
import typescript from '@rollup/plugin-typescript';
import image from '@rollup/plugin-image';
import copy from 'rollup-plugin-copy'

const production = !process.env.ROLLUP_WATCH;

export default {
    input: 'src/main.ts',
    output: {
        file: 'public/bundle.js',
        format: "esm", // immediately-invoked function expression — suitable for <script> tags
        sourcemap: true
    },
    plugins: [
        typescript({
            tsconfig: './tsconfig.json',
            module: "ESNext"
        }),
        resolve(), // tells Rollup how to find date-fns in node_modules
        commonjs({extensions: ['.js', '.ts']}), // converts date-fns to ES modules
        production && terser(),// minify, but only in production
        scss({ fileName: 'bundle.css' }),
        image({dom: true}),
        copy({
            targets: [
                { src: 'static/**/*', dest: 'public/static' }
            ]
        })
    ]
};
