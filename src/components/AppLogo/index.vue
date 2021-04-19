<!--
 * @Author: your name
 * @Date: 2021-04-19 17:22:00
 * @LastEditTime: 2021-04-19 19:13:21
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vite-project/src/components/AppLogo/index.vue
-->

<template>
  <div :class="prefixCls">
    <img src="../../assets/logo.png" alt="">
    <div class="ml-2 ellipsis" :class="[`${prefixCls}__title`]" v-show="showTitle">
      {{ title }}
    </div>
  </div>
</template>

<script lang="ts">
import VueTypes from 'vue-types';
import { defineComponent,ref } from 'vue'

import { useDesign } from '/@/hooks/web/useDesign';

export default defineComponent({
  name: 'AppLogo',
  props: {
    showTitle: VueTypes.bool.def(true),
  },
  setup () {
    const title = 'vite+project';
    const { prefixCls } = useDesign('app-logo')
    return {
      title,
      prefixCls
    }
  }
})
</script>

<style lang="less" scoped>
  @prefix-cls: ~'@{namespace}-app-logo';
  .@{prefix-cls} {
    display: flex;
    align-items: center;
    padding-left: 7px;
    cursor: pointer;
    transition: all 0.2s ease;
    
    img {
      width: @logo-width;
      height: @logo-width;
      margin-right: 2px;
    }

    &__title {
      font-size: 16px;
      font-weight: 700;
      opacity: 0;
      transition: all 0.5s;
      color: #fff;

      .respond-to(medium,{
        opacity: 1;
      });
    }
  }
</style>
