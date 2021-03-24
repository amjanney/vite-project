/*
 * @Author: your name
 * @Date: 2021-03-24 17:37:18
 * @LastEditTime: 2021-03-24 17:53:04
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vite-project/plugins/virutal-module.js
 */

export default function virtualModule() {
  return {
    name: 'virtualModule', // 名称用于警告和提示
    // 找到该模块
    resolveId(source) {
      if (source === 'virtual-module') {
        return source
      }
      return null;
    },
    // 加载代码
    load(id) {
      if (id === 'virtual-module') {
        return 'epxort default "this is virtual-module!"'
      }
      return null
    }
  }
}
