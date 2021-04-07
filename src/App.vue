<!--
 * @Author: your name
 * @Date: 2021-02-22 16:21:39
 * @LastEditTime: 2021-04-07 11:27:52
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vite-project/src/App.vue
-->
<template>
  <!-- <Home /> -->
  <router-view />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Home from './views/index.vue';
export default defineComponent({
  name: 'App',
  components: {
    Home,
  }
})
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>