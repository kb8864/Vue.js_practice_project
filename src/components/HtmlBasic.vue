<script setup>
import { ref } from 'vue'
const message = ref(`<h1>こんにちは</h1>
<span><a href="https://jp.vuejs.org/">Vue.jsの公式サイトへ</a></span>`)
// Ref変数として用意されたアドレスをアンカータグに反映させる


const url1 = ref('https://play.vuejs.org/#eNp9kUFLwzAUx7/KM5cqzBXZbXQDlYF6UFHBSy6je+sy0yQkL3NQ+t19SdncYezW9//9X/pL24l758a7iGIqqlB75QgCUnRzaVTrrCfowOMaelh720LB1UIaaWprAkEbGpglfl08odYWvq3Xq6viRpqqHI7jg3ggbJ1eEvIEUG3u5l2Xl/u+KnnKqTIuEuxuW7tCPZOCuRRQMqzKk30xEhT49WvVjLfBGjbv0r4UtW2d0ujfHCnWk2IKmSS2ZLvfl5yRjzg65PUG658z+TbsUybFu8eAfodSHBktfYM04MXnK+75+QjZPmpuX4AfGKyOyXGoPUSzYu2TXrZ9zt9fmeYrLPaEJhwulURTs899KfifPF64+r/uZDzJe9L0ov8DExSnNA==')
const url2 = ref('https://ja.vuejs.org/guide/introduction')

</script>


<template>
<!-- v-textディレクティブは配下のテキストを丸ごと置き換えるので、
テキストの一部を置き換えるような用途では{{…}}を利用 -->
  <!-- <p>{{ message }}</p> -->
  <!-- 上下意味的に同じ -->
  <!-- <p v-text="message"></p> -->
  <!-- 動的にHTMLを生成し、ページに反映させたい時 -->
  <p v-html="message"></p>
  <div>
    <a :href="url1" target="_blank" style="color: #42b983; text-decoration: none; padding: 10px; border: 2px solid #42b983; border-radius: 5px;">Vue.js 公式Vue SFC Playground</a>
    <a :href="url2" target="_blank" style="color: #42b983; text-decoration: none; padding: 10px; border: 2px solid #42b983; border-radius: 5px;">Vue.js 公式のチュートリアルとガイドを見る</a>
  </div>

</template>

<style scoped>
</style>
