const app = Vue.createApp({
  data: () => ({
    // message: 'Hello, Vue.js',
  }),
  //computedは、キャッシュがある。messageプロパティが変わらない限りは
  // reversedMessageに何度アクセスしても関数を再び実行することなく
  // 以前計算された結果を瞬時に返します
  // computed: {
  //   reversedMessage: function () {
  //     return this.message.split('').reverse().join('');
  //   },
  // },

  computed: {
    computedNumber: function () {
      console.log('computed!');
      return Math.random();
    },
  },

  // methodsはキャッシュなし。呼び出されるたびに関数の処理を行って処理を返します
  // methods: {
  //   reversedMessageMethod: function () {
  //     return this.message.split('').reverse().join('');
  //   },
  // },

  methods: {
    methodsNumber: function () {
      console.log('methods!');
      return Math.random();
    },
  },
});
app.mount('#app');
