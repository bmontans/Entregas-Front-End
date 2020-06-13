<template>
  <div id="app">
    <router-view />
    <br />
    <br />
    <footercustom></footercustom>
  </div>
</template>

<script>
import footercustom from "@/components/FooterCustom.vue";

export default {
  name: "App",
  components: { footercustom },
};
</script>

<style>
body,
html {
  margin: 0 auto;
  height: 100vh;
  background: #f3eff5;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #0d0a0b;
}

#nav {
  padding: 30px;
}

a {
  font-weight: bold;
  color: #a3c4bc;
}

a.router-link-exact-active {
  color: #cf4d6f;
}
</style>
