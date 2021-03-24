<!--
 * @Author: your name
 * @Date: 2021-03-23 10:32:54
 * @LastEditTime: 2021-03-24 11:18:27
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vite-project/src/components/composition-api/index.vue
-->
<template>
  <div>
    <h3>composition-api/index</h3>
    <Setup />
    <Reactive />
    <Ref />
  </div>
</template>

<script>
import Setup from './setup.vue';
import Reactive from './reactive.vue';
import Ref from './ref.vue';
export default {
  components: { Setup, Reactive, Ref },
  setup () {
    return {}
  }
}
</script>

<style scoped>

</style>