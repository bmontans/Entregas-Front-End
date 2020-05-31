 
<template>
  <div class="about">
    <h1>Hello! This was my first project using Vue.js</h1>
    <p>
      If you want to check out my Linkedin profile and learn more about me, click
      <a
        href="https://es.linkedin.com/in/brais-mont%C3%A1ns-bouza-75a412116"
      >here.</a>
    </p>
    <p>
      This website was made possible by both the
      <a
        href="https://rickandmortyapi.com/"
      >Rick and Morty API</a> and the
      <a href="https://www.npmjs.com/package/axios">AXIOS</a> library.
    </p>
    <Footer></Footer>
  </div>
</template>

<script>
import Footer from "@/components/Footer.vue";
// IMPORTANDO LA CONFIGURACION API

export default {
  name: "About",
  components: {
    Footer
  }
};
</script>

<style >
.about {
  color: black;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
}

a {
  text-decoration: none;
  color: #1993cc;
}
</style>