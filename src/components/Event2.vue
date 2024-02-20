<script setup>
const onclick = (message, e) => {
  console.log(message)
  console.log(e)
  e.target.textContent = "クリックされました！";
}
</script>

<template>
  <!-- $eventはVueテンプレート内でイベントオブジェクトにアクセスするための特別な変数 -->
  <!-- onclick関数に"こんにちは"と$event（イベントオブジェクト）を渡す -->
  <button v-on:click="onclick('こんにちは', $event)">クリック</button>
</template>

<style scoped>
</style>
