<template>
  <div>
    <vue-headful title="Error" />
    <h1>ERROR</h1>
    <p>😭 Where are you going? This page does not exist</p>
    <footercustom></footercustom>
  </div>
</template>

<script>
import footercustom from "@/components/FooterCustom.vue";

export default { name: "Error", components: { footercustom } };
</script>

<style scoped>
</style>