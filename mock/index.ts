/*
 * @Author: your name
 * @Date: 2021-03-25 11:45:53
 * @LastEditTime: 2021-03-25 15:38:41
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vite-project/mock/index.js
 */

import { MockMethod } from 'vite-plugin-mock';

export default [
  {
    url: '/api/test',
    timeout: 1000,
    method: 'get',
    response: () => {
      return {
        code: 0,
        message: 'ok',
        type: 'success',
        result: { id: 1, name: "tom", age: 18 },
      }
    },
  },
] as MockMethod[];
