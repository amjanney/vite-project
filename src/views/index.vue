<!--
 * @Author: your name
 * @Date: 2021-03-10 10:49:27
 * @LastEditTime: 2021-03-26 11:05:42
 * @LastEditors: Please set LastEditors
 * @Description: 组建入口文件
 * @FilePath: /vite-project/src/view/index.vue
-->
<template>
  <div>
    <!-- <ModelModifier v-model.capitalize="mytext" title="这是标题"/> -->
    <h3>view/index</h3>
    <composition-api />
    <jsx-test />
    <mock-test />
    <language-test />
    <element-test />
    <router-test />

  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'
  import ModelModifier from '/@/components/ModelModifier.vue';
  import HelloWorld from '/@/components/HelloWorld.vue'
  import CompositionApi from './test/composition-api/index.vue';
  import JsxTest from './test/jsx-test/index.vue';
  import MockTest from './test/mock-plugin-test/index.vue';
  import LanguageTest from './test/language-test/index.vue';
  import ElementTest from './test/element3-test/index.vue';
  import RouterTest from './test/router-test/index.vue';
  export default defineComponent({
    name: 'home',
    components: {
      ModelModifier,
      HelloWorld,
      CompositionApi,
      JsxTest,
      MockTest,
      LanguageTest,
      ElementTest,
      RouterTest
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