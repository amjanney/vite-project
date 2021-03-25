<!--
 * @Author: your name
 * @Date: 2021-03-25 11:59:12
 * @LastEditTime: 2021-03-25 15:38:29
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vite-project/src/components/mock-plugin-test/index.vue
-->
<template>
  <div>
    mock
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  export default defineComponent ({
    setup() {
      fetch('/api/test').then(reresponse => {
        console.log('mock test data', reresponse);
      })
      return {}
    }
  })
</script>

<style scoped>

</style>