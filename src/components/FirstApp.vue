<script setup>
// テンプレート変数を定義するには、ref関数に初期値を渡すだけ
import { ref } from 'vue'
//ビュー変数を準備
const message=ref('Hello world')
</script>

<template>
  <p>{{ message }}</p>
</template>

<style scoped>
</style>
