<!--
 * @Author: your name
 * @Date: 2021-03-25 11:59:12
 * @LastEditTime: 2021-03-25 15:49:13
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
      fetch('/api/test')
        .then(response => response.json())
        .then(data => console.log('data', data))
        .catch(e => console.log("Oops, error", e))
      return {}
    }
  })
</script>

<style scoped>

</style>