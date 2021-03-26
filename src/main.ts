/*
 * @Author: your name
 * @Date: 2021-02-22 16:21:39
 * @LastEditTime: 2021-03-26 15:17:02
 * @LastEditors: Please set LastEditors
 * @Description: 项目入口
 * @FilePath: /vite-project/src/main.ts
 */

import { createApp } from 'vue'
import App from './App.vue'

// i18n
import { createI18n } from "vue-i18n";
import messages from "@intlify/vite-plugin-vue-i18n/messages"

// element3
import 'element3/lib/theme-chalk/index.css'
import Element3 from "element3";

// router
import router, { setupRouter } from './routers';

const i18n = createI18n({
  legacy: false,
  locale: "en",
  messages,
});

const app = createApp(App);

app.use(i18n);
app.use(Element3);

setupRouter(app);

router.isReady().then(() => {
  app.mount('#app', true)
})

