<script setup>
  import {ref} from 'vue'
  const message = ref('こんにちは、Vue.js！')
</script>

<template>

  <div v-bind:style = "{backgroundColor:'Yellow',fontSize:'1.5em'}">
    {{message}}
  </div>
</template>
