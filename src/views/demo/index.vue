<!--
 * @Author: your name
 * @Date: 2021-03-10 10:49:27
 * @LastEditTime: 2021-04-07 15:13:27
 * @LastEditors: Please set LastEditors
 * @Description: composition api 测试文件
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
  import CompositionApi from './composition-api/index.vue';
  import JsxTest from './jsx-test/index.vue';
  import MockTest from './mock-plugin-test/index.vue';
  import LanguageTest from './language-test/index.vue';
  import ElementTest from './element3-test/index.vue';
  import RouterTest from './router-test/index.vue';
  export default defineComponent({
    name: 'demo',
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