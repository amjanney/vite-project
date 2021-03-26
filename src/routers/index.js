/*
 * @Author: your name
 * @Date: 2021-03-26 11:15:18
 * @LastEditTime: 2021-03-26 11:57:28
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vite-project/src/routers/index.js
 */
import { createRouter, createWebHashHistory } from 'vue-router';

import Foo from '/@/view/test/router-test/foo.vue';
import Bar from '/@/view/test/router-test/bar.vue';

const routes = [
  { path: '/foo', component: Foo },
  { path: '/bar', component: Bar }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router;
