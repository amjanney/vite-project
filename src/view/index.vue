<!--
 * @Author: your name
 * @Date: 2021-03-10 10:49:27
 * @LastEditTime: 2021-03-23 16:19:40
 * @LastEditors: Please set LastEditors
 * @Description: 组建入口文件
 * @FilePath: /vite-project/src/view/index.vue
-->
<template>
  <div>
    <!-- <ModelModifier v-model.capitalize="mytext" title="这是标题"/> -->
    <h3>view/index</h3>
    <hr />
    <CompositionApi />
    <hr />
     <Jsx />
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'
  import ModelModifier from '../components/ModelModifier.vue';
  import HelloWorld from '../components/HelloWorld.vue'
  import CompositionApi from '../components/composition-api/index.vue';
  import Jsx from '../components/jsx/index.vue';
  export default defineComponent({
    name: 'home',
    components: {
      ModelModifier,
      HelloWorld,
      CompositionApi,
      Jsx
    }
  })
</script>

<style scoped>
  p {
    display: inline-block;
  }
  .red {
    color: red;
  }
</style>