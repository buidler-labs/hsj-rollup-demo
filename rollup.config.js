import { join as pathJoin } from 'path';

import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';
import resolve from '@rollup/plugin-node-resolve';
import dotenv from 'dotenv';
import nodePolyfills from 'rollup-plugin-node-polyfills';

import strato from '@buidlerlabs/rollup-plugin-hedera-strato';
dotenv.config({ path: getPathOf('./.env') });

function getPathOf(file) {
  return pathJoin(__dirname, file);
}

export default async function getConfig() {
  return {
    context: 'window',
    input: './index.mjs',
    output: [ {
      file: getPathOf('./dist/hedera-strato.js'),
      format: 'esm',
      sourcemap: true,
    } ],
    plugins: [
      strato({ 
        includeCompiler: true,
        sourceMap: true, 
      }),
      resolve({
        extensions: [ '.js' ],
        mainFields: [ "browser", "module", "main" ],
        preferBuiltins: false,
        rootDir: getPathOf('.'),
      }),
      commonjs({
        esmExternals: true,
        requireReturnsDefault: "preferred",
      }),
      nodePolyfills({
        sourceMap: true,
      }),
      json(),
    ],
    treeshake: true,
  }
}
