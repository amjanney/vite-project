<!--
 * @Author: your name
 * @Date: 2021-04-16 17:28:52
 * @LastEditTime: 2021-04-19 17:26:16
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vite-project/src/layouts/default/header/index.vue
-->

<template>
  <Header>
    <!-- left -->
    <div :class="`${prefixCls}-left`">
      <AppLogo />
    </div>

    <!-- menu -->
    <!-- action -->
  </Header>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { Layout } from 'ant-design-vue';
import AppLogo from '/@/components/AppLogo/index.vue';

import { useDesign } from '/@/hooks/web/useDesign';

export default defineComponent({
  name: 'LayoutHeader',
  components: {
    Header: Layout.Header,
    AppLogo
  },
  setup(props) {

    const { prefixCls } = useDesign('default-layout');

    console.log(props);
    
    return {
      prefixCls
    }
  }
})
</script>

<style scoped lang="less">
  @import './index.less'; 
</style>
