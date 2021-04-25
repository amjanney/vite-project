/*
 * @Author: your name
 * @Date: 2021-04-25 20:44:40
 * @LastEditTime: 2021-04-25 21:05:11
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vite-project/src/utils/is.ts
 */

const toString = Object.prototype.toString;

/**
 * Object.prototype.toString.call(a)); //[Object Object]
 * @param val 
 * @param type 
 */
export function is(val: unknown, type: string) {
  return toString.call(val) === `[object ${type}]`
}

/**
 * @param val 
 */
export function isObject(val: any): val is Record<any, any> {
  return val !== null && is(val, 'Object');
} 
