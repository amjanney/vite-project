import path from 'path'
import { UserConfigExport, ConfigEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from "@vitejs/plugin-vue-jsx"
import { viteMockServe } from 'vite-plugin-mock'
import vueI18n from '@intlify/vite-plugin-vue-i18n'

export default ({ command }: ConfigEnv): UserConfigExport => {
  return {
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
