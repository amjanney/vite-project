<!--
 * @Author: your name
 * @Date: 2021-03-23 10:31:28
 * @LastEditTime: 2021-03-24 11:16:35
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vite-project/src/components/composition-api/setup.vue
-->

<!--
 * @param reactive 返回对象的响应式副本
 * @param readonly 任何被访问的嵌套 property 也是只读的
 * @param isProxy 检查对象是否是由 reactive 或 readonly 创建的 proxy。
 * @param isReactive 检查对象是否是由 reactive 创建的响应式代理
 * @param isReadonly 检查对象是否是由 readonly 创建的只读代理
 * @param toRaw 返回 reactive 或 readonly 代理的原始对象
 * @param markRaw 标记一个对象，使其永远不会转换为 proxy。返回对象本身。
 * @param shallowReactive 创建一个响应式代理，它跟踪其自身 property 的响应性，但不执行嵌套对象的深层响应式转换 (暴露原始值)。
 * @param shallowReadonly 创建一个 proxy，使其自身的 property 为只读，但不执行嵌套对象的深度只读转换 (暴露原始值)。
-->

<template>
  <div>
    <div ref="root">reactive:{{state.count}}</div>

  </div>
</template>

<script lang="ts">
import VueTypes from 'vue-types'
import { reactive, readonly, isProxy, ref, toRaw, markRaw, isReactive, h, onMounted, watchEffect,  } from 'vue';
export default {
  name: 'setup',
  props: {
    user: VueTypes.string
  },
  setup () {
    const state = reactive({
      count: 0
    })

    const count2 = ref(0);
    const obj = reactive({ count2 }); 

    // ref 不会被解构
    console.log(obj.count2 === count2.value); //true
    
    // 它会更新 `obj.value`
    count2.value ++;
    console.log(count2.value);
    console.log(obj.count2);
    
    // 它也会更新 `count` ref
    obj.count2++;
    console.log(count2.value);
    console.log(obj.count2);

    const origin = reactive({ count3: 0 })
    const copy = readonly(origin)
    origin.count3 = 1
    // copy.count3++ // 修改会出发警告

    console.log('origin对象是由reactive 或 readonly 创建的 proxy：' + isProxy(origin));
    console.log('copy对象是由reactive 或 readonly 创建的 proxy：' + isProxy(copy));

    const foo = {}
    const reactiveFoo = reactive(foo)
    console.log('原始对象比较：' + toRaw(reactiveFoo) === foo) // true
    
    const foo2 = markRaw({})
    console.log('原始对象：' + isReactive(reactive(foo))) // false

    return {
      state
    }
  }
}
</script>

<style scoped>

</style>