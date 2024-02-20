<!-- v-bind:styleとはv-bindディレクティブでstyle属性を設定 -->
<!-- style属性へのバインドをスタイルバインディングと呼ぶ -->
<script setup>
  import {ref, reactive}from 'vue'
  const message = ref('こんにちは、Vue.js！')
  const backgroundColorStyle = reactive({
  backgroundColor: 'Yellow'
})
const textStyle = reactive({
  color: 'darkred',
  fontSize: '20px',
  padding: '10px'
})

</script>
<template>
  <div v-bind:style = "{backgroundColorStyle, textStyle}">

    {{message}}
  </div>
</template>
