<script setup>
  import {ref, reactive} from 'vue'
  const message = ref('こんにちは、Vue.js！')

  //スタイル情報の準備
  const divStyle = reactive({
    backgroundColor: 'Yellow',
    color: 'Red',
    width: '100%',
    margin: '0 auto',
    maxWidth: '600px',
    padding: '10px'
    })
  const fontSize = reactive({
    fontSize:'1.5em'
  })


</script>

<template>
<!-- v-bind:styleは配列形式で複数のオブジェクトを渡せる -->
  <div v-bind:style="[ divStyle, fontSize, ]">
    <!-- <div v-bind:style = "{backgroundColor:'Yellow',fontSize:'1.0em'}"> -->
    {{message}}
  </div>
</template>
