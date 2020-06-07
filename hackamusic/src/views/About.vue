 
<template>
  <div>
    <menucustom></menucustom>
    <div class="about">
      <h1>Hello! This was a HACK A BOSS project for the Vue.js module</h1>
      <p>
        If you want to check out my Linkedin profile and learn more about me, click
        <a
          href="https://es.linkedin.com/in/brais-mont%C3%A1ns-bouza-75a412116"
        >here.</a>
      </p>
      <p>
        This website was made possible by both the
        <a href="https://rickandmortyapi.com/">LAST FM API</a> and the
        <a href="https://www.npmjs.com/package/axios">AXIOS</a> library.
      </p>
      <footercustom></footercustom>
    </div>
  </div>
</template>

<script>
import footercustom from "@/components/FooterCustom.vue";
import menucustom from "@/components/MenuCustom.vue";

export default {
  name: "About",
  components: { footercustom, menucustom }
};
</script>
<style>
.about {
  color: white;
  margin: 5rem;
}
a {
  color: #7a9b76;
}
</style>
