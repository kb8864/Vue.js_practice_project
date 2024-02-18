<script setup>
import { ref, computed } from 'vue'
const email = ref('Sample@example.com')
const localEmail = computed(() => {
  return email.value.split('@')[0].toLowerCase()
})
</script>

<template>
  <p>{{ localEmail }}</p>
</template>

<style scoped>
</style>