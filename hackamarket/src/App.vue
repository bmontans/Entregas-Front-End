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
@import url("https://fonts.googleapis.com/css?family=Noto+Sans:400,400i,700,700i&subset=greek-ext");

body,
html {
  margin: 0 auto;
  height: 100vh;
  background: #ffff70;
  font-family: "Noto Sans", sans-serif;
}

#app {
  font-family: Noto, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #080b0c;
}

#nav {
  padding: 30px;
}

a {
  font-weight: bold;
  color: #a3c4bc;
  text-decoration: none;
}

a.router-link-exact-active {
  color: #ffff70;
}
</style>
