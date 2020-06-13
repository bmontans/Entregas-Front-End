<template>
  <div>
    <h1>Bienvenido a Hack-a-Market</h1>
    <h2>Haz Login</h2>
    <input type="text" placeholder="Escribe tu email" v-model="email" />
    <input
      type="password"
      placeholder="Escribe tu contraseña"
      v-model="password"
    />
    <button @click="login()">LOGIN</button>
    <div>
      <br />
      En caso de que no tengas una cuenta creada, haz click
      <router-link to="/add-user">aquí</router-link> para crear un nuevo
      usuario.
    </div>
  </div>
</template>

<script>
import { loginUser } from "../api/utils";
import AddUSer from "../views/AddUser.vue";

export default {
  name: "Login",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    async login() {
      try {
        // INTENTO HACER LOGIN //
        await loginUser(this.email, this.password);
        // SI HAY LOGIN, QUE ME LLEVE AL HOME //
        this.$router.push("/home");
      } catch (err) {
        alert(`Error: ${err}`);
      }
    },
  },
};
</script>

<style scoped>
a {
  font-weight: bold;
  color: #cf4d6f;
}
</style>
