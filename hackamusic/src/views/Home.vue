<template>
  <div>
    <vue-headful title="Home" />
    <menucustom></menucustom>
    <div>
      <h1>WELCOME TO HACK FM</h1>
      <p>CHECK OUT WHAT THE TOP ARTISTS AND SONGS OF THE WEEK ARE BY CLICKING ON THE MENU ABOVE</p>
      <br />
      <p>YOU CAN ALSO CLICK ON THE TAGS BELOW TO DISCOVER NEW ARTISTS BASED ON YOUR FAVOURITE GENRES</p>
    </div>
    <tags :tags="tags"></tags>
    <footercustom></footercustom>
  </div>
</template>

<script>
import api from "@/api/index.js";
import tags from "@/components/tags.vue";
import footercustom from "@/components/FooterCustom.vue";
import menucustom from "@/components/MenuCustom.vue";

export default {
  name: "Home",
  components: { tags, footercustom, menucustom },
  data() {
    return {
      tags: [] /* array vacio donde metemos la respuesta de la Api */
    };
  },
  /* datos sacados de la API */
  created() {
    api.getTags().then(response => (this.tags = response.data.tags.tag));
  }
};
</script>
<style scoped>
div {
  color: #f2f5ea;
  margin: 3rem;
  font-size: 15px;
}
</style>
