<script setup>
import { ref } from 'vue'

// refを使ってリアクティブなアイテムのリストを管理する
const items = ref(['アイテム1', 'アイテム2', 'アイテム3']);

// 特定のアイテムをリストから削除するメソッド
function deleteItem(index) {
  items.value.splice(index, 1);
  alert('アイテムが削除されました！');
}
</script>

<template>
  <h3>アイテムリスト</h3>
  <ul>
    <!-- リスト内の各アイテムに対してv-forを使用して削除ボタンを配置 -->
    <li v-for="(item, index) in items" :key="index">
      {{ item }}
      <button v-on:click="deleteItem(index)">削除</button>
    </li>
  </ul>
</template>

<style scoped>
</style>
