<!--
 * @Author: your name
 * @Date: 2021-03-24 11:17:51
 * @LastEditTime: 2021-03-24 15:19:00
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vite-project/src/components/composition-api/ref.vue
-->

<!--
 * @param ref 接受一个内部值并返回一个响应式且可变的 ref 对象。ref 对象具有指向内部值的单个 property .value。
 * @param unref 如果参数是一个 ref，则返回内部值，否则返回参数本身
 * @param toRef 可以用来为源响应式对象上的某个 property 新创建一个 ref
 * @param toRefs 将响应式对象转换为普通对象，其中结果对象的每个 property 都是指向原始对象相应 property 的 ref
 * @param isRef 检查值是否为一个 ref 对象
 * @param customRef 创建一个自定义的 ref
 * @param shallowRef 创建一个跟踪自身 .value 变化的 ref，但不会使其值也变成响应式的。
 * @param triggerRef 手动执行与 shallowRef 关联的任何副作用
-->


<template>
  <div>
    ref:{{count}}
  </div>
</template>

<script>
import { ref, unref, isRef, reactive, toRef, toRefs, watchEffect, getCurrentInstance } from 'vue';
export default {
  setup () {
    const count = ref(0)
    console.log(count.value) // 0

    count.value++;
    console.log(count.value); // 1

    const val = ref(1);
    const realVal = unref(val);
    
    console.log("🚀 ~ file: ref.vue ~ line 38 ~ setup ~ realVal", realVal)
    console.log(isRef(val));

    const state = reactive({
      foo: 1,
      bar: 2
    })

    // 把对象的某一个属性响应式
    const fooRef = toRef(state, 'foo')

    fooRef.value++
    console.log(state.foo) // 2

    state.foo++
    console.log(fooRef.value) // 3

    const state2 = reactive({
      foo: 1,
      bar: 2
    })
    const stateAsRefs = toRefs(state2)

    const num = ref(0)

    watchEffect(() => console.log(num.value))
    // -> logs 0

    setTimeout(() => {
      num.value++
      // -> logs 1
    }, 2000)

    const internalInstance = getCurrentInstance()
    console.log("🚀 ~ file: ref.vue ~ line 75 ~ setup ~ internalInstance", internalInstance)
    
    return {
      count,
      stateAsRefs
    }
  }
}
</script>

<style scoped>

</style>