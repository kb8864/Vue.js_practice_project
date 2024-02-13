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
    
    // 在庫がなくなったら3秒後に在庫を10個追加
    if (this.stock === 0) {
      setTimeout(() => {
        this.stock = 10;
      }, 3000);
    }
  }
}
  
})


const vm = app.mount('#app')