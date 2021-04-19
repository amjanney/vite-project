/*
 * @Author: your name
 * @Date: 2021-04-07 15:45:30
 * @LastEditTime: 2021-04-16 17:27:55
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vite-project/src/router/constant.ts
 */

import type { AppRouteRecordRaw } from '/@/router/types';
import { PageEnum } from '/@/enums/pageEnum';

export const LAYOUT = () => import('/@/layouts/default/index.vue');

// 首页
export const RootRoute: AppRouteRecordRaw = {
  path: '/',
  name: 'Root',
  redirect: PageEnum.BASE_HOME,
  meta: {
    title: 'Root',
  },
};

// 登陆
export const LoginRoute: AppRouteRecordRaw = {
  path: '/login',
  name: 'Login',
  component: () => import('/@/views/login/index.vue'),
  meta: {
    title: '登陆',
  },
};
