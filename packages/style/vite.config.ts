import { extname, relative, resolve } from 'path'
import { glob } from 'glob'

import { defineConfig } from 'vite'

export default defineConfig({
  publicDir: 'lib/static',
  build: {
    rollupOptions: {
      input: Object.fromEntries(
        glob
          .sync('{lib/**(!static),lib}/[^_]*.scss')
          .map(file => [relative('lib', file.slice(0, file.length - extname(file).length)), resolve(__dirname, file)]),
      ),
      output: {
        assetFileNames: 'css/[name][extname]',
      },
    },
  },
})
