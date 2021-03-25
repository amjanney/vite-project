<!--
 * @Author: your name
 * @Date: 2021-03-25 17:24:19
 * @LastEditTime: 2021-03-25 17:30:29
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vite-project/src/components/language-test/index.vue
-->
<template>
  <div>
    <form>
      <label>{{ t('language') }}</label>
      <select v-model="locale">
        <option value="en">en</option>
        <option value="ja">ja</option>
      </select>
    </form>
    <p>{{ t('hello') }}</p>
  </div>
</template>

<script lang="ts">
  import { useI18n } from "vue-i18n";
  import { defineComponent } from 'vue';
  export default defineComponent ({
    setup() {
      const { locale, t } = useI18n({
        inheritLocale: true,
      });
      return {
        locale,
        t
      }
    }
  })
</script>

<i18n>
{
  "en": {
    "language": "Language",
    "hello": "hello, world!"
  },
  "ja": {
    "language": "言語",
    "hello": "こんにちは、世界！"
  }
}
</i18n>

<style scoped>

</style>
