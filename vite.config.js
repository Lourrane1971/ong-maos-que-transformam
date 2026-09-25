import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  root: 'html',

  build: {
    outDir: '../dist',
    emptyOutDir: true,

    rollupOptions: {
      input: {
        index: resolve(process.cwd(), 'html/index.html'),
        projetos: resolve(process.cwd(), 'html/projetos.html'),
        cadastro: resolve(process.cwd(), 'html/cadastro.html')
      }
    }
  }
})
