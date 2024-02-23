<script setup>
import { ref, reactive  } from 'vue'// refもインポートする
// Ref変数として用意されたアドレスをアンカータグに反映させる
const url1 = ref('https://ja.vuejs.org/guide/introduction')
// const url2 = ref('https://play.vuejs.org/#eNp9kUFLwzAUx7/KM5cqzBXZbXQDlYF6UFHBSy6je+sy0yQkL3NQ+t19SdncYezW9//9X/pL24l758a7iGIqqlB75QgCUnRzaVTrrCfowOMaelh720LB1UIaaWprAkEbGpglfl08odYWvq3Xq6viRpqqHI7jg3ggbJ1eEvIEUG3u5l2Xl/u+KnnKqTIuEuxuW7tCPZOCuRRQMqzKk30xEhT49WvVjLfBGjbv0r4UtW2d0ujfHCnWk2IKmSS2ZLvfl5yRjzg65PUG658z+TbsUybFu8eAfodSHBktfYM04MXnK+75+QjZPmpuX4AfGKyOyXGoPUSzYu2TXrZ9zt9fmeYrLPaEJhwulURTs899KfifPF64+r/uZDzJe9L0ov8DExSnNA==')
// const msg = ref('何か入力してね')
// const imageAttrs = reactive({
//   width: 700,
//   height: 400
// })

// reactiveで複数の属性を管理するオブジェクトを作成
const attrs = reactive({
  size: 12,
  maxlength: 20

})

</script>

<template>
  <div>
    <!-- href属性にurl変数をバインドし、アンカータグのテキストに説明を追加 -->
    <a :href="url1" target="_blank" style="color: #42b983; text-decoration: none; padding: 10px; border: 2px solid #42b983; border-radius: 5px;">Vue.js 公式のチュートリアルとガイドを見る</a>
    <!-- <a :href="url2" target="_blank" style="color: #42b983; text-decoration: none; padding: 10px; border: 2px solid #42b983; border-radius: 5px;">Vue.js 公式Vue SFC Playground</a> -->
    <!-- フォームのinputタグにreactiveオブジェクトの属性まとめてバインド -->
    <!-- <form>
        <label for="message">メッセージ：</label><br>
        <input type="text" id="message" v-bind="attrs" />
    </form> -->
  </div><br>
  <!-- <input v-model = "msg"> -->
  <!-- <img src="https://www.study.gr.jp/material/bgpoint_jpg/downloadfile/image_balloon.jpg" v-bind="imageAttrs"> -->
</template>