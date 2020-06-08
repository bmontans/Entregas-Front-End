<template>
  <div>
    <menucustom></menucustom>
    <vue-headful title="Error" />
    <h1>ERROR</h1>
    <p>THIS PAGE DOES NOT EXIST. SELECT ANY OTHER PAGE ON THE MENU TO GO BACK</p>
    <footercustom></footercustom>
  </div>
</template>

<script>
import footercustom from "@/components/FooterCustom.vue";
import menucustom from "@/components/MenuCustom.vue";

export default { name: "Error", components: { footercustom, menucustom } };
</script>

<style scoped>
</style>