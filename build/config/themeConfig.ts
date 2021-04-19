/*
 * @Author: your name
 * @Date: 2021-04-16 16:27:13
 * @LastEditTime: 2021-04-19 16:29:18
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vite-project/build/config/themeConfig.ts
 */

import { generate } from '@ant-design/colors';

// 默认全局主题色
export const primaryColor = '#0084f4';

export const themeMode = 'light';

export type ThemeMode = 'dark' | 'light';

export function generateAntColors(color: string, mode: ThemeMode) {
  return generate(color, {
    theme: mode == 'dark' ? 'dark' : 'default',
  });
}

/**
 * less 全局变量添加
 */
 export function generateModifyVars() {
  const palettes = generateAntColors(primaryColor, themeMode);
  const primary = palettes[5];

  const primaryColorObj: Record<string, string> = {};

  for (let index = 0; index < 10; index++) {
    primaryColorObj[`primary-${index}`] = palettes[index];
  }

  return {
    'primary-color': primary,
    ...primaryColorObj,
    'info-color': primary,
    'alert-info-bg-color': palettes[0],
    'alert-info-border-color': palettes[2],
    'processing-color': primary,
    'success-color': '#55D187', //  Success color
    'error-color': '#ED6F6F', //  False color
    'warning-color': '#EFBD47', //   Warning color
    'disabled-color': 'rgba(0, 0, 0, 0.25)', //  Failure color
    'heading-color': 'rgba(0, 0, 0, 0.85)', //  Title color
    'text-color': 'rgba(0, 0, 0, 0.85)', //  Main text color
    'text-color-secondary ': 'rgba(0, 0, 0, 0.45)', // Subtext color
    'font-size-base': '14px', //  Main font size
    'box-shadow-base': '0 2px 8px rgba(0, 0, 0, 0.15)', //  Floating shadow
    'border-color-base': '#d9d9d9', //  Border color,
    'border-radius-base': '2px', //  Component/float fillet
    'link-color': primary, //   Link color
  };
}
