const app = Vue.createApp({
  data: () => ({
    newItem: '',
    // イベントハンドラであるaddItemメソッドでinput要素に入力されている値とデータバインディングされているnewItemの値を配列に追加する処理を記述

    todos: [],
  }),
  methods: {
    addItem: function (event) {
      console.log('Clicked!');
      let todo = {
        item: this.newItem,
      };
      this.todos.push(todo);
    },
  },
});
app.mount('#app');
