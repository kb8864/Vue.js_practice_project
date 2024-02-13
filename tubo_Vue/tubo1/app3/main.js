const app = Vue.createApp({
  data(){
    return{
      message: 'こっちは何もバインドされてない',
      isCapitalize: true
    }
  }

})
const vm = app.mount('#app')