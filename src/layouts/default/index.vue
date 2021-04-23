<!--
 * @Author: your name
 * @Date: 2021-03-26 10:03:54
 * @LastEditTime: 2021-04-23 16:54:35
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vite-project/src/layouts/index.vue
-->
<template>
  <Layout :class="prefixCls">
    <Layout class="ant-layout-has-sider">
      <LayoutSiderBar></LayoutSiderBar>
      <Layout :class="`${prefixCls}_main`">
        <LayoutHeader></LayoutHeader>
        <LayoutContent></LayoutContent>
        <LayoutFooter></LayoutFooter>
      </Layout>
    </Layout>
    <router-view></router-view>
  </Layout>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { Layout } from 'ant-design-vue';

import LayoutHeader from './header/index.vue';
import LayoutSiderBar from './sider/index.vue';
import LayoutContent from './content/index.vue';
import LayoutFooter from './footer/index.vue';

import { useDesign } from '/@/hooks/web/useDesign';

export default defineComponent({
  name: 'DefaultLayout',
  components: {
    Layout,
    LayoutHeader,
    LayoutSiderBar,
    LayoutContent,
    LayoutFooter
  },
  setup () {
    const { prefixCls } = useDesign('default-layout');
    return {
      prefixCls
    }
  }
});

</script>

<style lang="less" scoped>
  @prefix-cls: ~'@{namespace}-default-layout';
  .@{prefix-cls} {
    display: flex;
    width: 100%;
    min-height: 100%;
    background: @content-bg;
    flex-direction: column;

    > .ant-layout {
      min-height: 100%;
    }

    &__main {
      margin-left: 1px;
    }
  }
</style>