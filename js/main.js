const app = Vue.createApp({
  data: () => ({
    newItem: '',
    // イベントハンドラであるaddItemメソッドでinput要素に入力されている値とデータバインディングされているnewItemの値を配列に追加する処理を記述

    todos: [],
  }),
  methods: {
    addItem: function (event) {
      // console.log('Clicked!');
      // 下記の記述がないとタスクが未入力でも配列に追加されてしまう
      if (this.newItem === '') return;
      let todo = {
        item: this.newItem,
        isDone: false, // task完了、未完了の真偽地
      };
      this.todos.push(todo);
      this.newItem = '';
    },
  },
});
app.mount('#app');
