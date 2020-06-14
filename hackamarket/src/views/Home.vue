<template>
  <div>
    <menucustom></menucustom>
    <clientescustom
      class="box"
      v-show="!editClient"
      :clientes="clientes"
      v-on:borrar="deleteClients"
      v-on:editar="showEditText"
    ></clientescustom>
    <div class="modal" v-show="editClient">
      <div class="modalBox">
        <p class="editClient">Edita los datos del cliente</p>
        <p>Nombre:</p>
        <input type="text" v-model="newNombre" placeholder="Nombre" />
        <br />
        <input type="text" v-model="newApellido" placeholder="Apellido" />
        <br />
        <input type="text" v-model="newCiudad" placeholder="Ciudad" />
        <br />
        <input type="text" v-model="newEmpresa" placeholder="Empresa" />
        <br />
        <button @click="updateClients()">Actualizar</button>
        <button @click="reloadPage()">Cerrar</button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Swal from "sweetalert2";

import menucustom from "../components/MenuCustom";
import clientescustom from "../components/ClientesCustom";

export default {
  name: "Home",
  components: { menucustom, clientescustom },
  data() {
    return {
      clientes: [],
      newNombre: "",
      newApellido: "",
      newCiudad: "",
      newEmpresa: "",
      id: null,
      editClient: false,
    };
  },
  methods: {
    getClients() {
      const self = this;
      axios
        .get("http://localhost:3050/clientes")
        .then(function(response) {
          console.log(response);
          self.clientes = response.data;
        })
        .catch(function(error) {
          console.error(error);
        });
    },
    deleteClients(data) {
      let id = data;
      axios
        .delete("http://localhost:3050/clientes/del/" + id)
        .then(function(response) {
          console.log(response);
        })
        .catch(function(error) {
          console.error(error);
        });
    },
    updateClients() {
      const self = this;
      axios
        .put("http://localhost:3050/clientes/edit/" + self.id, {
          nombre: self.newNombre,
          apellido: self.newApellido,
          ciudad: self.newCiudad,
          empresa: self.newEmpresa,
          id: self.id,
        })
        .then(function(response) {
          self.editClient = false;
          Swal.fire(
            "¡Cliente actualizado correctamente!",
            "Pulsa OK para continuar.",
            "success"
          );
          location.reload();
          console.log(response);
        })
        .catch(function(error) {
          console.error(error);
        });
    },
    showEditText(data) {
      this.editClient = true;
      this.newNombre = data.nombre;
      this.newApellido = data.apellido;
      this.newCiudad = data.ciudad;
      this.newEmpresa = data.empresa;
      this.id = data.id;
    },
    reloadPage() {
      location.reload();
    },
  },
  created() {
    this.getClients();
  },
};
</script>
<style scoped>
.modal {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  width: 100%;
}
.modalBox {
  background: #fefefe;
  margin: 15% auto;
  padding: 20px;
  border: 1px solid #888;
  width: 80%;
}
</style>
