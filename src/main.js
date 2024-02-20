import './assets/main.css'

// Vueライブラリのインポート。
import { createApp } from 'vue'

// アプリ本体のインポート
import App from './App.vue'
// import Style from './components/Style.vue'
import Bind from './components/Bind.vue'
import Event from './components/Event.vue'
import Event2 from './components/Event2.vue'
// import BindDelete from './components/BindDelete.vue'

// Vueアプリの起動。
// createApp＝アプリインスタンス（vueアプリを管理するためのオブジェクト）の生成。
// mountメソッドでVueアプリを「id="app"である要素」上で起動

createApp(App).mount('#app')
