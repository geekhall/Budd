// vite config file
import {
  defineConfig
} from 'vite'
import vue from '@vitejs/plugin-vue'
import {
  resolve
} from 'path/posix'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    // 定义路径别名
    alias: {
      '@': resolve(__dirname, 'src'),
      "pages": resolve('src/pages/'),
      "components": resolve('src/components/'),
      "utils": resolve('src/utils'),
      "routes": resolve('src/routes'),
      "styles": resolve('src/styles')
    }
  }
})