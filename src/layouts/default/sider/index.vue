<!--
 * @Author: your name
 * @Date: 2021-04-19 19:37:33
 * @LastEditTime: 2021-04-19 20:53:22
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vite-project/src/layouts/default/sider/index.vue
-->

<template>
  <Drawer>
    123
    <Sider />
  </Drawer>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'
  import { Drawer } from 'ant-design-vue';
  import Sider from './LayoutSider.vue';
  
  export default defineComponent({
    name: 'LayoutWrapper',
    components: {
      Drawer,
      Sider
    },
    setup () {
      

      return {}
    }
  })
</script>

<style scoped>

</style>
