<template>
  <div id="app">
    <Header />
    <Nav />
    <Main />
  </div>
</template>

<script>
import Header from "./components/Header";
import Nav from "./components/Nav";
import Main from "./components/Main";
export default {
  name: "app",
  components: {
    Header,
    Nav,
    Main
  }
};
</script>

<style>
</style>
