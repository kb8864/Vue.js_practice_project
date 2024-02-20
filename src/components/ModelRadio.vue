<script setup>
import { ref } from 'vue'
// 初期値
const gender = ref('男性')

const answer = ref('普通')
</script>

<template>
  <form>
    <label for="text">性別を選んで下さい</label><br>
    <label for="man">男性</label>
    <input type="radio" id="man" value="男性" v-model="gender" />
    <br />
    <label for="woman">女性</label>
    <input type="radio" id="woman" value="女性" v-model="gender" />
    <br />
    <label for="other">その他</label>
    <input type="radio" id="other" value="その他" v-model="gender" />

  </form>
  <p>性別：{{ gender }}</p>

  <form>
    <label for="text">本サービスの使いごごちはいかがですか？</label><br>
    <label for="man">最高</label>
    <input type="radio" id="best" value="最高" v-model="answer" />
    <label for="nomal">普通</label>
    <input type="radio" id="nomal" value="普通" v-model="answer" />
    <label for="no_good">イマイチ</label>
    <input type="radio" id="no_good" value="イマイチ" v-model="answer" /><br>
    <p>回答：{{ answer }}</p>

</form>
</template>