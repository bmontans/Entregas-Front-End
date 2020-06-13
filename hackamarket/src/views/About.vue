<template>
  <div class>
    <menucustom></menucustom>
    <div class="about">
      <h1>Hello! This was a HACK A BOSS project for the Vue.js module</h1>
      <p>
        If you want to check out my Linkedin profile and learn more about me,
        click
        <a href="https://es.linkedin.com/in/brais-mont%C3%A1ns-bouza-75a412116"
          >here.</a
        >
      </p>
      <p>
        This website was made possible by the following node libraries:
        <a href="https://www.npmjs.com/package/axios">AXIOS</a>.
      </p>
    </div>
  </div>
</template>

<script>
import menucustom from "@/components/MenuCustom.vue";

export default {
  name: "About",
  components: { menucustom},
};
</script>

<style scoped>
a {
  font-weight: bold;
  color: #cf4d6f;
}
</style>
