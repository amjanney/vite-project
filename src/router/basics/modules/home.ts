/*
 * @Author: your name
 * @Date: 2021-04-07 14:42:36
 * @LastEditTime: 2021-04-07 15:55:34
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vite-project/src/router/basics/modules/home.ts
 */

import type { AppRouteModule } from '/@/router/types';
import { LAYOUT } from '/@/router/constant';

const dashboard: AppRouteModule = {
  path: '/home',
  name: 'home',
  component: LAYOUT,
  redirect: '/home/welcome',
  meta: {
    title: '首页'
  },
  children: [
    {
      path: 'welcome',
      name: 'welcome',
      component: () => import('/@/views/home/index.vue'),
      meta: {
        title: '首页'
      }
    },
    {
      path: 'test',
      name: 'test',
      component: () => import('/@/views/test/index.vue'),
      meta: {
        title: '测试页面'
      }
    }
  ]
}

export default dashboard;
