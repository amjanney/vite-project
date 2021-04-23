<!--
 * @Author: your name
 * @Date: 2021-04-19 19:37:33
 * @LastEditTime: 2021-04-23 17:07:58
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vite-project/src/layouts/default/sider/index.vue
-->

<template>
  <div class="sider">
    <header class="header">
      <AppLogo />
    </header>
    <a-button type="primary" @click="toggleCollapsed" style="margin-bottom: 16px">
      <MenuUnfoldOutlined v-if="collapsed" />
      <MenuFoldOutlined v-else />
    </a-button>
    <a-menu
      :default-selected-keys="['1']"
      :default-open-keys="['2']"
      mode="inline"
      theme="dark"
      :inline-collapsed="collapsed"
    >
      <template v-for="item in list" :key="item.key">
        <template v-if="!item.children">
          <a-menu-item :key="item.key">
            <PieChartOutlined />
            <span>{{ item.title }}</span>
          </a-menu-item>
        </template>
        <template v-else>
          <sub-menu :menu-info="item" :key="item.key" />
        </template>
      </template>
    </a-menu>
  </div>
</template>

<script lang="ts">
  import { defineComponent, ref } from 'vue'
  import AppLogo from '/@/components/AppLogo/index.vue';
  import Submenu from './components/Submenu.vue';
  import {
    MenuFoldOutlined,
    PieChartOutlined,
    MenuUnfoldOutlined,
  } from '@ant-design/icons-vue';

  const list = [
    {
      key: '1',
      title: 'Option 1',
    },
    {
      key: '2',
      title: 'Navigation 2',
      children: [
        {
          key: '2.1',
          title: 'Navigation 3',
          children: [{ key: '2.1.1', title: 'Option 2.1.1' }],
        },
      ],
    },
  ];

  export default defineComponent({
    name: 'LayoutSiderBar',
    components: {
      AppLogo,
      MenuFoldOutlined,
      PieChartOutlined,
      MenuUnfoldOutlined,
      'sub-menu': Submenu
    },
    setup () {
      const collapsed = ref<boolean>(false);
      const toggleCollapsed = () => {
        collapsed.value = !collapsed.value;
      }
      return {
        collapsed,
        list,
        toggleCollapsed
      }
    }
  })
</script>

<style lang="less" scoped>
.sider {
  width: 210px;
  background: #001529;

  .header {
    height: 64px;
    line-height: 64px;
  }
}
</style>
