<template>
  <div class="home">
    <menucustom></menucustom>
    <h2>LISTA DE CLIENTES</h2>
    <div class="clientes" v-for="(cliente, index) in clientes" :key="cliente.id">
      <h1>{{ cliente.nombre }} {{cliente.apellido}}</h1>
      <p>ID: {{ cliente.id }}</p>
      <p>CIUDAD: {{ cliente.ciudad }}</p>
      <p>EMPRESA: {{ cliente.empresa }}</p>
      <button @click="deleteClients(index)">BORRAR</button>
      <button @click="openModal()">Editar</button>
      <br />
      <br />
    </div>

    <!-- MODAL PARA EDITAR CLIENTES -->
    <div v-show="modal" class="modal">
      <div class="modalBox">
        <h2>Modal para datos</h2>
        <input type="text" placeholder="Hola, soy un input" />
        <br />
        <br />
        <button @click="closeModal()">Cerrar</button>
      </div>
    </div>
  </div>
</template>

<script>
import menucustom from "@/components/MenuCustom.vue";
import axios from "axios";

export default {
  name: "Home",
  components: { menucustom },
  data() {
    return {
      clientes: [],
      modal: false
    };
  },
  methods: {
    getClients() {
      var self = this;
      axios
        .get("http://localhost:3050/clientes")
        .then(function(response) {
          console.log(response);
          self.clientes = response.data;
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    deleteClients(index) {
      this.id = this.clientes[index].id;

      axios
        .delete("http://localhost:3050/clientes/del/" + this.id, {
          id: this.id
        })
        .then(function(response) {
          console.log(response);
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    openModal() {
      this.modal = true;
    },
    closeModal() {
      this.modal = false;
    }
  },
  created() {
    this.getClients();
  }
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