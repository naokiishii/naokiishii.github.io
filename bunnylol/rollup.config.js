import { nodeResolve } from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs';

export default {
  input: './compiled/app.js',
  output: {
    sourcemap: true,
    file: './bundle.js',
    format: 'cjs',
  },
  plugins: [
    nodeResolve(),
    commonjs({
      transformMixedEsModules: true,
    }),
  ],
};