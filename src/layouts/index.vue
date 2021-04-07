<!--
 * @Author: your name
 * @Date: 2021-03-26 10:03:54
 * @LastEditTime: 2021-04-07 16:25:23
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vite-project/src/layouts/index.vue
-->
<template>
  <div>
    Layout
    <a-button type="primary">antd button</a-button>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'Layout',
  setup () {
    
    return {}
  }
}
</script>

<style lang="scss" scoped>

</style>