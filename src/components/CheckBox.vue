<script setup>
import { ref } from 'vue'
const agree = ref('')

const language = ref(['日本語'])

</script>

<template>
  <form>
    <label for="agree">同意する：</label>
    <input type="checkbox" id="agree" v-model="agree" true-value=" ○" false-value=" ×"/>
    <!-- <input type="checkbox" id="agree" v-model="agree"
      true-value="○" false-value="×" /> -->
  </form>
  <div>回答：{{ agree }} </div><br>
  <form >
    <div>話せる言語は？</div>
    <label for="japanese">日本語</label>
    <input type="checkbox" id="japanese" value="日本語" v-model="language" />
    <label for="english">英語</label>
    <input type="checkbox" id="english" value="英語" v-model="language" />
    <label for="german">ドイツ語</label>
    <input type="checkbox" id="german" value="ドイツ語" v-model="language" />
  </form>
  <div>回答：{{ language }} </div>
</template>

<style scoped>
</style>
