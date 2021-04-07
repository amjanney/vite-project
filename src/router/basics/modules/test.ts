/*
 * @Author: your name
 * @Date: 2021-04-07 14:42:41
 * @LastEditTime: 2021-04-07 15:53:31
 * @LastEditors: Please set LastEditors
 * @Description: 测试路由
 * @FilePath: /vite-project/src/router/basics/modules/test.ts
 */
import type { AppRouteModule } from '/@/router/types';
import { LAYOUT } from '/@/router/constant';

const test: AppRouteModule = {
  path: '/test',
  name: 'test',
  component: LAYOUT,
  redirect: '/test/testdemo',
  meta: {
    title: '测试路由',
  },
  children: [
    {
      path: 'testdemo',
      name: 'testdemo',
      component: () => import('/@/views/test/index.vue'),
      meta: {
        title: '测试路由',
      },
    },
  ],
}

export default test;
