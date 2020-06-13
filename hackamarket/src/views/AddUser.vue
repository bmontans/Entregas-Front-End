<template>
  <div>
    <p v-show="required">TIENES DATOS AÚN POR RELLENAR.</p>
    <!-- FORMULARIO -->
    <div>
      <label for="nombre">Email:</label>
      <input
        type="text"
        name="email"
        placeholder="User email..."
        v-model="email"
      />
      <br />
      <label for="password">Password:</label>
      <input
        type="text"
        name="password"
        placeholder="User password"
        v-model="password"
      />
      <br />
      <br />
      <br />
      <button @click="addUser(email, password)">
        CREAR
      </button>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "AddUser",
  data() {
    return {
      email: "",
      password: "",
      admin: "",
      correctData: false,
      required: false,
    };
  },
  methods: {
    validatingData() {
      if (this.email === "" || this.password === "") {
        this.correctData = false; // NO ENVIAR //
        this.required = true;
      } else {
        this.correctData = true; // SI ENVIAR //
        this.required = false;
      }
    },
    addUser(email, password, admin) {
      // VALIDANDO DATOS DEL FORMULARIO //
      this.validatingData();
      if (this.correctData === true) {
        var self = this;

        axios
          .post("http://localhost:3050/addUser", {
            email: self.email,
            password: self.password,
          })
          .then(function(response) {
            self.emptyFields();
            console.log(response);
          })
          .catch(function(error) {
            console.log(error);
          });
      } else {
        alert("No has rellenado todos los campos.");
      }
    },
    emptyFields() {
      this.email = "";
      this.password = "";
    },
  },
};
</script>

<style scoped>
p {
  color: red;
}
</style>
