import path from 'path'
import { UserConfigExport, ConfigEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from "@vitejs/plugin-vue-jsx"
import { viteMockServe } from 'vite-plugin-mock'
import vueI18n from '@intlify/vite-plugin-vue-i18n'

function pathResolve(dir: string) {
  return path.resolve(__dirname, '.', dir);
}

/**
 * alias使用方法：/@/components/HelloWorld.vue 注意：别名必须用/[别名]/包裹
 */

export default ({ command }: ConfigEnv): UserConfigExport => {
  return {
    alias: [
      {
        find: /^\/@\//,
        replacement: pathResolve('src') + '/',
      },
    ],
    plugins: [
      vue(),
      vueJsx(),
      viteMockServe({
        ignore: /^\_/,
        mockPath: 'mock',
      }),
      vueI18n({
        include: path.resolve(__dirname, './src/locales/**')
      })
    ]
  }
}
