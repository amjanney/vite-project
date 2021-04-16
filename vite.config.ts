/*
 * @Author: your name
 * @Date: 2021-03-25 18:58:38
 * @LastEditTime: 2021-04-16 16:39:40
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vite-project/vite.config.ts
 */
import path from 'path'
import { UserConfigExport, ConfigEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from "@vitejs/plugin-vue-jsx"
import { viteMockServe } from 'vite-plugin-mock'
import vueI18n from '@intlify/vite-plugin-vue-i18n'

import { generateModifyVars } from './build/config/themeConfig';

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
    css: {
      preprocessorOptions: {
        less: {
          modifyVars: {
            // reference:  Avoid repeated references
            hack: `true; @import (reference) "${path.resolve('src/styles/config.less')}";`,
            ...generateModifyVars(),
          },
          javascriptEnabled: true,
        },
      },
    },
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
