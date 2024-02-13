const app = Vue.createApp({
  data(){
    return{
    price: 900,
    stock: 10
    }
  },

  methods: {
    // 在庫数を減らすメソッド
    decreaseStock() {
      if (this.stock > 0) {
        this.stock -= 1;
      }
    }
  }
})
const vm = app.mount('#app')