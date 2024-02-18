<script setup>
import { ref, reactive  } from 'vue'// refもインポートする
// Ref変数として用意されたアドレスをアンカータグに反映させる
const url = ref('https://ja.vuejs.org/guide/introduction')

const imageAttrs = reactive({
  width: 700,
  height: 400
})

// reactiveで複数の属性を管理するオブジェクトを作成
const attrs = reactive({
  size: 12,
  maxlength: 20

})

</script>

<template>
  <div>
    <!-- href属性にurl変数をバインドし、アンカータグのテキストに説明を追加 -->
    <a :href="url" target="_blank" style="color: #42b983; text-decoration: none; padding: 10px; border: 2px solid #42b983; border-radius: 5px;">Vue.js 公式のチュートリアルとガイドを見る</a>

    <!-- フォームのinputタグにreactiveオブジェクトの属性まとめてバインド -->
    <form>
        <label for="message">メッセージ：</label><br>
        <input type="text" id="message" v-bind="attrs" />
    </form>
  </div>
  <img src="https://www.study.gr.jp/material/bgpoint_jpg/downloadfile/image_balloon.jpg" v-bind="imageAttrs">
</template>