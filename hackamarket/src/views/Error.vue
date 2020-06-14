<template>
  <div class="error">
    <vue-headful title="404 Page not found" />
    <menuerror></menuerror>
    <h1>Woah!</h1>
    <br />
    <p>This is an error page.</p>
    <p>Please, use the navitagion menu to return to the main page.</p>
  </div>
</template>

<script>
import menuerror from "@/components/MenuError.vue";

export default {
  name: "Error",
  components: { menuerror },
};
</script>

<style></style>
