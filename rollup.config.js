import compiler from '@ampproject/rollup-plugin-closure-compiler'
import typescript from '@rollup/plugin-typescript'
import dts from 'rollup-plugin-dts'
import includePaths from 'rollup-plugin-includepaths'
import resolve from 'rollup-plugin-node-resolve'
import replace from 'rollup-plugin-replace'

const input = 'src/index.ts'
const name = 'cep-address-finder'
const format = 'cjs'

const config = [
    {
        input,
        output: [
            {
                file: `dist/${name}.js`,
                format,
                name,
                exports: 'named',
            },
        ],
        plugins: [typescript(), compiler()],
        external: ['node-fetch'],
    },
    {
        input,
        output: [
            {
                file: `dist/${name}-browser.js`,
                format,
                name,
                exports: 'named',
            },
        ],
        plugins: [
            replace({
                'node-fetch': 'unfetch',
            }),
            resolve({
                browser: true,
            }),
            typescript(),
            compiler(),
        ],
        context: 'window',
    },
    {
        input,
        output: [{ file: `dist/${name}.d.ts`, format: 'cjs', name }],
        plugins: [
            dts(),
            includePaths({
                paths: ['src/lib', 'src/types'],
                extensions: ['.js', '.ts'],
            }),
        ],
    },
]

export default config
