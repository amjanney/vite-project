/*
 * @Author: your name
 * @Date: 2021-03-26 14:59:55
 * @LastEditTime: 2021-04-07 11:53:56
 * @LastEditors: Please set LastEditors
 * @Description: 基础路由，不需要权限
 * @FilePath: /vite-project/src/routers/basics/index.ts
 */

// import Foo from '/@/views/test/router-test/foo.vue';
// import Bar from '/@/views/test/router-test/bar.vue';

// export const basicRoutes = [
//   { path: '/foo', component: Foo },
//   { path: '/bar', component: Bar }
// ]
import type { AppRouteRecordRaw, AppRouteModule } from '/@/router/types';
import { PageEnum } from '/@/enums/pageEnum';

export const RootRoute: AppRouteRecordRaw = {
  path: '/',
  name: 'Root',
  redirect: PageEnum.BASE_HOME,
  meta: {
    title: 'Root',
  },
};

// import Login from '/@/views/login/Login.vue';

export const LoginRoute: AppRouteRecordRaw = {
  path: '/login',
  name: 'Login',
  component: () => import('/@/views/login/Login.vue'),
  meta: {
    title: '登陆',
  },
};

// 基础路由 不用权限
export const basicRoutes = [LoginRoute, RootRoute]
