<template>
  <div>
    <menucustom></menucustom>
    <vue-headful title="Error" />
    <div class="error">
      <h1>ERROR</h1>
      <p>THIS PAGE DOES NOT EXIST. SELECT ANY OTHER PAGE ON THE MENU TO GO BACK</p>
    </div>
    <footercustom></footercustom>
  </div>
</template>

<script>
import footercustom from "@/components/FooterCustom.vue";
import menucustom from "@/components/MenuCustom.vue";

export default { name: "Error", components: { footercustom, menucustom } };
</script>

<style scoped>
.error {
  color: #f2f5ea;
  margin-top: 10rem;
}
</style>