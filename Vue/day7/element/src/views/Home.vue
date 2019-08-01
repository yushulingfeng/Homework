<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <Home />
    <Tabbar />
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import Home from '@/components/Home.vue'
import Tabbar from '@/views/Tabbar.vue'
export default {
  // name: 'home',
  components: {
    // HelloWorld
    Home,
     Tabbar
  }
}
</script>
