import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
import { defineConfig } from 'vite'
//mock
import { UserConfigExport, ConfigEnv } from 'vite'
import { viteMockServe } from 'vite-plugin-mock'
import vue from '@vitejs/plugin-vue'
import path from 'path'


// https://vitejs.dev/config/
export default (
  ({command}:ConfigEnv) => {
    return ({
      plugins: [vue(),
      createSvgIconsPlugin({
        iconDirs: [path.resolve(process.cwd(), 'src/assets/icons')],
        symbolId: 'icon-[dir]-[name]',
      }), viteMockServe({
        localEnabled: command === 'serve',
      }),],
      resolve: {
        alias: {
          "@": path.resolve("./src") // 相对路径别名配置，使用 @ 代替 src
        },
      },
      css: {
        preprocessorOptions: {
          scss: {
            javascriptEnabled: true,
            additionalData: '@import "./src/styles/variable.scss";',
          },
        },
      },
    })
  })
