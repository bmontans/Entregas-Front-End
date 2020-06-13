<template>
  <div id="nav">
    <router-link to="/home">Home</router-link>
    <br />
    <router-link to="/about">About</router-link>|
    <router-link to="/market">Market</router-link>|
    <router-link to="/add-client">Add Client</router-link>
    <br />
    <br />
    <button @click="logoutUser()">LOGOUT</button>
    <br />
  </div>
</template>

<script>
import { clearLogin } from "../api/utils";

export default {
  name: "MenuCustom",
  methods: {
    logoutUser() {
      this.$router.push("/");
      return clearLogin();
    },
  },
};
</script>

<style scoped>
#nav {
  background: #37323e;
}
</style>
