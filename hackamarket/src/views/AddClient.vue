<template>
  <div>
    <vue-headful title="Añadir cliente" />
    <menucustom></menucustom>
    <p v-show="required">TIENES DATOS AÚN POR RELLENAR.</p>
    <!-- FORMULARIO -->
    <div>
      <br />
      <br />
      <label for="nombre">Nombre:</label>
      <br />
      <input
        type="text"
        name="nombre"
        placeholder="Nombre del cliente"
        v-model="nombre"
      />
      <br />
      <br />
      <label for="apellido">Apellido:</label>
      <br />
      <input
        type="text"
        name="apellido"
        placeholder="Apellido del cliente"
        v-model="apellido"
      />
      <br />
      <br />
      <label for="ciudad">Ciudad:</label>
      <br />
      <input
        type="text"
        name="ciudad"
        placeholder="Ciudad del cliente"
        v-model="ciudad"
      />
      <br />
      <br />
      <label for="empresa">Empresa:</label>
      <br />
      <input
        type="text"
        name="empresa"
        placeholder="Empresa del cliente"
        v-model="empresa"
      />
      <br />
      <br />
      <button @click="addClient(nombre, apellido, ciudad, empresa)">
        CREAR
      </button>
    </div>
  </div>
</template>

<script>
import menucustom from "@/components/MenuCustom.vue";
import Swal from "sweetalert2";
import axios from "axios";

export default {
  name: "AddClient",
  components: { menucustom },
  data() {
    return {
      nombre: "",
      apellido: "",
      ciudad: "",
      empresa: "",
      correctData: false,
      required: false,
    };
  },
  methods: {
    validatingData() {
      if (
        this.nombre === "" ||
        this.apellido === "" ||
        this.ciudad === "" ||
        this.empresa === ""
      ) {
        this.correctData = false; // NO ENVIAR //
        this.required = true;
      } else {
        this.correctData = true; // SI ENVIAR //
        this.required = false;
      }
    },
    addClient(nombre, apellido, ciudad, empresa) {
      // VALIDANDO DATOS DEL FORMULARIO //
      this.validatingData();
      if (this.correctData === true) {
        var self = this;

        axios
          .post("http://localhost:3050/add", {
            nombre: self.nombre,
            apellido: self.apellido,
            ciudad: self.ciudad,
            empresa: self.empresa,
          })
          .then(function(response) {
            self.emptyFields();
            console.log(response);
          })
          .catch(function(error) {
            console.log(error);
          });
      } else {
        Swal.fire({
          icon: "error",
          title: "Ooops...",
          text: "Debes rellenar todos los campos",
        });
      }
    },
    emptyFields() {
      this.nombre = "";
      this.apellido = "";
      this.ciudad = "";
      this.empresa = "";
    },
  },
};
</script>

<style scoped>
p {
  color: red;
}
</style>
