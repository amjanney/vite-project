import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from "@vitejs/plugin-vue-jsx"
import virtualModule from './plugins/virutal-module.js';

export default defineConfig({
  plugins: [vue(), vueJsx(), virtualModule()]
})
