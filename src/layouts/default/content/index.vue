<!--
 * @Author: your name
 * @Date: 2021-04-20 10:31:15
 * @LastEditTime: 2021-04-23 17:20:50
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vite-project/src/layouts/default/content/index.vue
-->
<template>
  <div :class="prefixCls">
    content
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useDesign } from '/@/hooks/web/useDesign';

export default defineComponent({
  name: 'LayoutContent',
  setup () {
    const { prefixCls } = useDesign('layout-content');
    return {
      prefixCls
    }
  }
})
</script>

<style lang="less" scoped>
  @prefix-cls: ~'@{namespace}-layout-content';
  .@{prefix-cls} {
    position: relative;
    flex: 1 1 auto;
    min-height: 0;

    &.fixed {
      width: 1200px;
      margin: 0 auto;
    }

    &-loading {
      position: absolute;
      top: 200px;
      z-index: @page-loading-z-index;
    }
  }
</style>