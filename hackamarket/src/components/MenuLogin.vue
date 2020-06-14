<template>
  <div id="nav">
    <router-link to="/">Return</router-link>
  </div>
</template>

<script>
import { clearLogin } from "../api/utils";

export default {
  name: "MenuLogin",
};
</script>

<style scoped>
#nav {
  background: black;
}
</style>
