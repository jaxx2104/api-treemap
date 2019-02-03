import commonjs from 'rollup-plugin-commonjs'
import typescript from 'rollup-plugin-typescript'

const plugins = [typescript(), commonjs()]

export default [
  {
    input: 'src/main.js',
    output: {
      file: 'dist/bundle.js',
      format: 'umd',
      name: 'warsman',
      sourcemap: true
    },
    plugins
  },
  {
    input: 'src/bin.js',
    output: {
      banner: '#!/usr/bin/env node',
      file: 'bin/warsman',
      format: 'umd'
    },
    plugins
  }
]
