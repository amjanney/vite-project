/*
 * @Author: your name
 * @Date: 2021-02-22 16:21:39
 * @LastEditTime: 2021-03-25 17:22:35
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vite-project/src/main.ts
 */
import { createApp } from 'vue'
import App from './App.vue'

// 测试virtual-module插件
// import vm from 'virtual-module';
// console.log("🚀 ~ file: main.ts ~ line 12 ~ vm", vm)
// i18n
import { createI18n } from "vue-i18n";
import messages from "@intlify/vite-plugin-vue-i18n/messages";
const i18n = createI18n({
  legacy: false,
  locale: "en",
  messages,
});
const app = createApp(App);
app.use(i18n);
app.mount('#app')
