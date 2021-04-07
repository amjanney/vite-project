<!--
 * @Author: your name
 * @Date: 2021-04-07 10:29:47
 * @LastEditTime: 2021-04-07 14:26:33
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vite-project/src/view/login/Login.vue
-->
<template>
  <div>
    Login:{{count}}
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'Login',
  setup () {
    const count = ref(1)

    return {
      count
    }
  }
})
</script>

<style scoped>

</style>