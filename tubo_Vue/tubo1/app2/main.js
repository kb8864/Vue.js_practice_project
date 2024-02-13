const app = Vue.createApp({
  data(){
    return{
      message_en: 'hello world',
      message_ja: 'こんにちは、世界',
      lang: 'ja'
    }
  }

})
const vm = app.mount('#app')