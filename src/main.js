import './assets/main.css'

// Vueライブラリのインポート。
import { createApp } from 'vue'

// アプリ本体のインポート
import App from './App.vue'

// Vueアプリの起動。
// createApp＝アプリインスタンス（vueアプリを管理するためのオブジェクト）の生成。
// mountメソッドでVueアプリを「id="app"である要素」上で起動

createApp(App).mount('#app')
