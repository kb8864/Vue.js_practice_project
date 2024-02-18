<script setup>
import { ref, computed } from 'vue'
const email = ref('Sample@example.com')

// 演算した結果を取得する算出プロパティ
// 算出プロパティは「プロパティ」なので、参照する際にも関数呼び出しの()などは不要

const localEmail = computed(() => {
  return email.value.split('@')[0].toLowerCase()
})
</script>

<template>
  <p>{{ localEmail }}</p>
</template>

<style scoped>
</style>