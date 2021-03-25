<!--
 * @Author: your name
 * @Date: 2021-03-10 10:49:27
 * @LastEditTime: 2021-03-25 19:20:32
 * @LastEditors: Please set LastEditors
 * @Description: 组建入口文件
 * @FilePath: /vite-project/src/view/index.vue
-->
<template>
  <div>
    <!-- <ModelModifier v-model.capitalize="mytext" title="这是标题"/> -->
    <h3>view/index</h3>

    <hr />

    <composition-api />

    <hr />

    <jsx />

    <hr />

    <mock-test />

    <hr />
    
    <language-test />
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'
  import ModelModifier from '/@/components/ModelModifier.vue';
  import HelloWorld from '/@/components/HelloWorld.vue'
  import CompositionApi from '/@/components/composition-api/index.vue';
  import Jsx from '/@/components/jsx/index.vue';
  import MockTest from '/@/components/mock-plugin-test/index.vue';
  import LanguageTest from '/@/components/language-test/index.vue';
  export default defineComponent({
    name: 'home',
    components: {
      ModelModifier,
      HelloWorld,
      CompositionApi,
      Jsx,
      MockTest,
      LanguageTest
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