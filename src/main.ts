/*
 * @Author: your name
 * @Date: 2021-02-22 16:21:39
 * @LastEditTime: 2021-03-26 11:57:06
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
import messages from "@intlify/vite-plugin-vue-i18n/messages"

// element3
import 'element3/lib/theme-chalk/index.css'
import Element3 from "element3";

// router
import router from './routers/index.js';

const i18n = createI18n({
  legacy: false,
  locale: "en",
  messages,
});

const app = createApp(App);

app.use(i18n);
app.use(Element3);
app.use(router);

app.mount('#app')
