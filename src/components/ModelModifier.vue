<!--
 * @Author: your name
 * @Date: 2021-03-10 10:29:35
 * @LastEditTime: 2021-03-11 11:12:49
 * @LastEditors: Please set LastEditors
 * @Description: 自定义键盘输入
 * @FilePath: /vite-project/src/components/ModelModifier.vue
-->
<template>
  <div>
    <input
      type="text"
      :value="modelValue"
      @input="eimitValue"
      />
  </div>
</template>

<script>
  export default {
    name: 'model-modifier',
    emits: ['update:modelValue'],
    props: {
      modelValue: String,
      title: {
        type: [Number, String],
        default: 0
      },
      modelModifiers: {
        type: Object,
        default: () => {}
      }
    },
    methods: {
      eimitValue(e) {
        console.log("🚀 ~ file: ModelModifier.vue ~ line 31 ~ eimitValue ~ e", e.target.value)
        let value = e.target.value;
        if(this.modelModifiers.capitalize) {
          value = value.charAt(0).toUpperCase() + value.slice(1);
          this.$emit('update:modelValue', value);
        }
      }
    },
    created() {
      console.log(this.title);
      console.log(this.modelModifiers.capitalize);
    }
  }
</script>

<style scoped>

</style>
