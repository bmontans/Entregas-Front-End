<template>
  <div id="nav">
    <ul>
      <li>
        <router-link to="/home">Clients</router-link>
      </li>
      <li>
        <router-link to="/market">Market</router-link>
      </li>
      <li>
        <router-link to="/add-client">Add Client</router-link>
      </li>
      <li>
        <router-link to="/about">About</router-link>
      </li>
      <li>
        <div class="button_cont" @click="logoutUser()">
          <a class="example_c" target="_blank" rel="nofollow noopener"
            >Logout</a
          >
        </div>
      </li>
      <br />
    </ul>
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
  background: #080b0c;
}

ul {
  list-style: none;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
}
li {
  border-radius: 5%;
  justify-content: center;
  align-items: center;
  font-size: 1.1rem;
  font-weight: bold;
  opacity: 70%;
  width: 10%;
  height: 10%;
  padding: 20px;
}

li:hover {
  opacity: 100%;
}
.example_c {
  color: #494949;
  text-transform: uppercase;
  text-decoration: none;
  background: #ffffff;
  border: 2px solid #494949;
  transition: all 0.4s ease 0s;
  padding: 20px;
}
.example_c:hover {
  color: #ffff70;
  background: #e84855;
  transition: all 0.4s ease 0s;
}
</style>
