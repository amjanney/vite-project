/*
 * @Author: your name
 * @Date: 2021-04-25 20:35:19
 * @LastEditTime: 2021-04-25 21:06:28
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vite-project/src/utils/index.ts
 */

import { isObject } from '/@/utils/is';

export function deepMerge<T = any>(src: any = {}, target: any ={}): T {
  let key: string;
  for(key in target) {
    src[key] = isObject(src[key]) ? deepMerge(src[key], target[key]) : (src[key] = target[key]);
  }
  return src;
}
