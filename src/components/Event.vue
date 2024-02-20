<script setup>
  import { ref } from 'vue'

  // クリック時に実行されるイベントハンドラー
  const onclick = message => {
    alert('ボタンがクリックされました！');

}
</script>

<template>
  <h3>イベントハンドラーの登録</h3><br>
  <!-- ボタンクリック時にonclickメソッドを呼び出す -->
  <button v-on:click="onclick('こんにちは')">クリック</button>
  <p>{{ message }}</p>
</template>

<style scoped>
</style>