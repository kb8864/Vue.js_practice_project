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
    deleteItem: function (index) {
      //引数がindexなのは、deleteItemメソッドから見たときにどの削除ボタンが押されたか判別する必要があり、そこで deleteItemメソッドの引数に配列のindexを渡す
      console.log('delete');
      console.log('index');

      //作成したタスクは配列に追加されるので、配列からから要素を削除する.spliceを使用
      this.todos.splice(index, 1);
    },
  },
});
app.mount('#app');
