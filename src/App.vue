<!-- <script>要素にはsetup属性を付与する -->

<script setup>
// import HelloWorld from './components/HelloWorld.vue'
// import TheWelcome from './components/TheWelcome.vue'
// import Style from './components/Style.vue'
import Bind from './components/Bind.vue'
// import ModelBasic from './components/ModelBasic.vue'
// import ModelRadio from './components/ModelRadio.vue'
// import CheckBox from './components/CheckBox.vue'

// import Calendar from './components/Calendar.vue'
import Upload from './components/Upload.vue'

// import Event from './components/Event.vue'
// import Event2 from './components/Event2.vue'
// import BindDelete from './components/BindDelete.vue'
// import Esckey from './components/Esckey.vue'

</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />
    
    <div class="wrapper">
      <!-- <Esckey /><br> -->
      <Bind />
      <Calendar />
      <Upload />
      <!-- <Style /> -->
      <!-- <Event /> -->
      <!-- <BindDelete /> -->
      <!-- <Event2 /> -->

    </div>
    
    <ModelBasic /><br>
    <ModelRadio /><br>
    <CheckBox />
  </header>

</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
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

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
