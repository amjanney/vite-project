/*
 * @Author: your name
 * @Date: 2021-02-22 16:21:39
 * @LastEditTime: 2021-03-16 17:46:05
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vite-project/src/main.ts
 */
import { createApp } from 'vue'
import App from './App.vue'
import Jlement3 from 'jl-ui-test';

const app = createApp(App);
app.use(Jlement3);
app.mount('#app')
