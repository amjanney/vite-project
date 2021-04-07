/*
 * @Author: your name
 * @Date: 2021-03-26 14:59:55
 * @LastEditTime: 2021-04-07 15:49:51
 * @LastEditors: Please set LastEditors
 * @Description: 基础路由，不需要权限
 * @FilePath: /vite-project/src/routers/basics/index.ts
 */

import type { AppRouteRecordRaw, AppRouteModule } from '/@/router/types';
// 首页路由，登陆路由
import { RootRoute, LoginRoute } from "/@/router/constant";

// 引入modules下的所有路由文件
const modules = import.meta.globEager('./modules/**/*.ts');
let routeModuleList: AppRouteModule[] = [];

// 获取每个模块中的路由
Object.keys(modules).forEach((key) => {
  const mod = modules[key].default || {};
  const modList = Array.isArray(mod) ? [...mod] : mod;
  routeModuleList.push(modList);
})

// 基础路由 不用权限
export const basicRoutes = [LoginRoute, RootRoute, ...routeModuleList]
