<!--
 * @Author: your name
 * @Date: 2021-03-26 11:02:58
 * @LastEditTime: 2021-03-26 11:58:42
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vite-project/src/view/test/router-test/index.vue
-->
<template>
  <div>
    <h3>router-test</h3>

    <div>
      <router-link to="/foo">Go to Foo</router-link>
      ｜
      <router-link to="/bar">Go to Bar</router-link>
    </div>

    <router-view></router-view>
  </div>
</template>

<script>
export default {
  setup () {
    

    return {}
  }
}
</script>

<style lang="scss" scoped>
 
</style>