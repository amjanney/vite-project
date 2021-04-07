/*
 * @Author: your name
 * @Date: 2021-03-26 11:15:18
 * @LastEditTime: 2021-03-26 15:16:08
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vite-project/src/routers/index.js
 */
import type { App } from 'vue';
import type { RouteRecordRaw } from 'vue-router';
import { createRouter, createWebHashHistory } from 'vue-router';

import { basicRoutes } from './basics';

const router = createRouter({
  history: createWebHashHistory(),
  routes: basicRoutes as RouteRecordRaw[],
  strict: true,
})

export function setupRouter(app: App<Element>) {
  app.use(router);
};

export default router;
