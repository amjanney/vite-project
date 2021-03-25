/*
 * @Author: your name
 * @Date: 2021-02-22 16:21:39
 * @LastEditTime: 2021-03-24 19:25:47
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vite-project/src/main.ts
 */
import { createApp } from 'vue'
import App from './App.vue'

// 测试virtual-module插件
// import vm from 'virtual-module';
// console.log("🚀 ~ file: main.ts ~ line 12 ~ vm", vm)

const app = createApp(App);
app.mount('#app')
