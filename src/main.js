// import './assets/main.css'

// Vueライブラリのインポート。
import { createApp } from 'vue'


// アプリ本体のインポート
import App from './App.vue'
// import FirstApp from './components/FirstApp.vue'
import HtmlBasic from './components/HtmlBasic.vue'
// import Bind from './components/Bind.vue'
import Style from './components/Style.vue'

// import Computed from './components/Computed.vue'
// import MethodCompute from './components/MethodCompute.vue'


// Vueアプリの起動。
// createApp＝アプリインスタンス（vueアプリを管理するためのオブジェクト）の生成。
// mountメソッドでVueアプリを「id="app"である要素」上で起動

createApp(App).mount('#app')
