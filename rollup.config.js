import compiler from '@ampproject/rollup-plugin-closure-compiler'
import dts from 'rollup-plugin-dts'
import typescript from '@rollup/plugin-typescript'

import pkg from './package.json'

const config = [
    {
        input: 'src/lib/index.ts',
        output: [
            {
                file: pkg.main,
                format: 'cjs',
            },
        ],
        plugins: [
            typescript(),
            compiler(),
        ],
    },
    {
        input: 'src/lib/index.ts',
        output: [{ file: pkg.types, format: 'cjs' }],
        plugins: [dts()],
    },
];

export default config;
