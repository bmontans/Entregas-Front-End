<template>
  <div>
    <vue-headful title="Home" />
    <menucustom></menucustom>
    <tags :tags="tags"></tags>
    <footercustom></footercustom>
  </div>
</template>

<script>
/*  Importamos los componentes */
import Swal from "sweetalert2";
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
</style>
