<script setup>
import { ref } from 'vue'
const message = ref(`<h1>こんにちは</h1>
  <span><a href="https://jp.vuejs.org/">Vue.js!!!!</a></span>`)
</script>


<template>
<!-- v-textディレクティブは配下のテキストを丸ごと置き換えるので、
テキストの一部を置き換えるような用途では{{…}}を利用 -->
  <!-- <p>{{ message }}</p> -->
  <!-- 上下意味的に同じ -->
  <!-- <p v-text="message"></p> -->

  <!-- 動的にHTMLを生成し、ページに反映させたい時 -->
  <p v-html="message"></p>
</template>

<style scoped>
</style>
