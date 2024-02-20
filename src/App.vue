<!-- <script>要素にはsetup属性を付与する -->

<script setup>
// import HelloWorld from './components/HelloWorld.vue'
// import TheWelcome from './components/TheWelcome.vue'
// import FirstApp from './components/FirstApp.vue'
// import Computed from './components/Computed.vue'
// import MethodCompute from './components/MethodCompute.vue'
import HtmlBasic from './components/HtmlBasic.vue'
// import Bind from './components/Bind.vue'

import Style from './components/Style.vue'
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />

    <!-- wrapperクラスを使用している<div>タグがHelloWorldコンポーネントを囲んでいるため、この<div>タグ内にFirstAppとComputedを移動させる -->
    <!-- wrapper divをHelloWorldコンポーネントのみでなく、他のコンポーネントも含むように調整 -->
    <div class="wrapper">
      <!-- <Computed />
      <MethodCompute /> -->
      <HtmlBasic />
      <Style />
    </div>

  </header>
</template>

<style scoped>
header {
  display: flex;
    flex-direction: column; /* Flexの方向を縦（column）に設定 */
    align-items: center;
    padding-right: calc(var(--section-gap) / 2)
}

.logo {
  margin-bottom: 2rem; /* ロゴ下の余白調整 */
  /* display: block;
  margin: 0 auto 2rem; */
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  /* FirstAppとComputedコンポーネントを移動したら、HelloWorldコンポーネントの直下にこの２つのコンポーネントを配置 */
  header .wrapper {
    display: flex;
    flex-direction: column; /* Flexの方向を縦（column）に設定 */
    align-items: center;
  }
}
</style>
