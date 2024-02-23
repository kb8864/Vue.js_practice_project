<script setup>
import {ref} from 'vue'
const result = ref ('')

// ２、ref属性を取得
const upfile = ref(null)

// ３、クリックしたらアップロードファイルを取得する処理を実行
const onclick = () =>{
  const file = upfile.value.files[0]

// ４、Fileオブジェクトのままではアップロードできないのでフォーム送信のための形式にここで変換
  const form = new FormData()
  form.append('upfile', file, file.name)

  // ５、（fetchメソッドの第二引数で更新）ファイルを送信する
  fetch('upload.php', {
    method: 'POST',
    body: form
    })
    // ６、then()メソッドを使って、成功ときは(（バイナリデータとして)レスポンスデータを取得
    .then(function(response){
      // return response.text()
      return response.blob()// テキストではなく、blobとしてレスポンスを取得
    })
    // ７、ページに結果を表する
    // .then(function(text){
    //   result.value = text
    // })
    .then(function(blob){
      // 取得したバイナリデータ（Blob）からブラウザが表示可能なURLを生成するために、URL.createObjectURL()メソッドを使用
      const url = URL.createObjectURL(blob)
      result.value = url
    })
}
</script>

<template>
  <!-- ファイル入力ボックスの用意 -->
  <form >
    <input type="file" ref="upfile">
    <input type="button" value="アップロード" v-on:click="onclick">
  </form>
  <div v-if="result">
    <img :src="result" alt="" />
  </div>
</template>