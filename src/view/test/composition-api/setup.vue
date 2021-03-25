<!--
 * @Author: your name
 * @Date: 2021-03-23 10:31:28
 * @LastEditTime: 2021-03-23 19:28:54
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vite-project/src/components/composition-api/setup.vue
-->
<template>
  <div>
    <div ref="root">setup:This is a root element</div>
  </div>
</template>

<script lang="ts">
import VueTypes from 'vue-types'
import { ref, computed, reactive, h, onMounted, watchEffect } from 'vue';
export default {
  name: 'setup',
  props: {
    user: VueTypes.string
  },
  setup () {
    const root = ref(null)

    watchEffect(() => {
      // 这个副作用在 DOM 更新之前运行，因此，模板引用还没有持有对元素的引用。
      // console.log(root.value) // => null
    },{
        flush: 'post'
      });

    return {
      root
    }
  }
}
</script>

<style scoped>

</style>