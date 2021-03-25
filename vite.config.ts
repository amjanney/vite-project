import { UserConfigExport, ConfigEnv } from 'vite';
import vue from '@vitejs/plugin-vue'
import vueJsx from "@vitejs/plugin-vue-jsx"
// import virtualModule from './plugins/virutal-module.js';
import { viteMockServe } from 'vite-plugin-mock';

export default ({ command }: ConfigEnv): UserConfigExport => {
  return {
    plugins: [
      vue(),
      vueJsx(),
      viteMockServe({
        mockPath: 'mock',
      })
    ]
  }
}
