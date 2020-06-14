<template>
  <div>
    <vue-headful title="Add user" />
    <menulogin></menulogin>
    <br />
    <br />
    <p v-show="required">TIENES DATOS AÚN POR RELLENAR.</p>
    <!-- FORMULARIO -->
    <div>
      <label for="nombre">Nombre de usuario</label>
      <br />
      <input
        type="text"
        name="email"
        placeholder="Nombre de usuario..."
        v-model="email"
      />
      <br />
      <br />
      <label for="password">Contraseña</label>
      <br />
      <input
        type="text"
        name="password"
        placeholder="Contraseña"
        v-model="password"
      />
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
import Swal from "sweetalert2";
import menulogin from "@/components/MenuLogin.vue";

export default {
  name: "AddUser",
  components: { menulogin },
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
            Swal.fire(
              "¡Usuario creado correctamente!",
              "Vuelve al menú principal y entra con tus credenciales.",
              "success"
            );
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

label {
  padding: 2rem;
}
</style>
