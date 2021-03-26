/*
 * @Author: your name
 * @Date: 2021-03-26 14:59:55
 * @LastEditTime: 2021-03-26 18:55:27
 * @LastEditors: Please set LastEditors
 * @Description: 基础路由，不需要权限
 * @FilePath: /vite-project/src/routers/basics/index.ts
 */

import Foo from '/@/view/test/router-test/foo.vue';
import Bar from '/@/view/test/router-test/bar.vue';

export const basicRoutes = [
  { path: '/foo', component: Foo },
  { path: '/bar', component: Bar }
]
