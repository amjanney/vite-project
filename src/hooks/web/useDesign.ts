/*
 * @Author: your name
 * @Date: 2021-04-19 16:35:44
 * @LastEditTime: 2021-04-19 16:39:12
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vite-project/src/hooks/web/useDesign.ts
 */

import  designSetting from '/@/settings/designSetting';

export function useDesign(scope: string) {
  return {
    prefixCls: `${designSetting.prefixCls}-${scope}`,
    prefixVar: designSetting.prefixCls,
  }
}
