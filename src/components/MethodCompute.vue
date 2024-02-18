<script setup>
import { ref, computed } from 'vue'
// こっちは算出プロパティ
const randomc = computed(() => Math.random())

// こっちはメソッド
const randomm = () => Math.random()

const current =  ref(new Date().toLocaleTimeString())

setInterval(() => {
  current.value = new Date().toLocaleTimeString()
}, 1000)
</script>

<template>
  <p>算出プロパティ：{{ randomc }}</p>
  <!-- メソッドなので()はひつよう -->

  <p>メソッド：{{ randomm() }}</p>
  <p>現在日時：{{ current }}</p>

</template>

<style scoped>
</style>