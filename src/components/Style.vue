<!-- v-bind:styleとはv-bindディレクティブでstyle属性を設定 -->
<!-- style属性へのバインドをスタイルバインディングと呼ぶ -->
<script setup>
  import {ref}from 'vue'
  const message = ref('こんにちは、Vue.js！')
</script>
<template>
  <div v-bind:style = "{backgroundColor:'Yellow', fontSize: '1.5em'}">

    {{message}}
  </div>
</template>
