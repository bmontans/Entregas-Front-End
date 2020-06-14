<template>
  <div>
    <vue-headful title="Lista de clientes" />
    <div v-for="(cliente, index) in clientes" :key="cliente.id">
      <ul>
        <li>
          <div class="clients">
            <p>{{ cliente.nombre }}</p>
            <p>{{ cliente.apellido }}</p>

            <p>{{ cliente.ciudad }}</p>
            <p>{{ cliente.empresa }}</p>
            <button @click="deleteClientsEvent(index)">Borrar</button>
            <button @click="updateClienteEvent(index)">Editar</button>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "listaclientes",
  props: {
    clientes: Array,
  },
  methods: {
    deleteClientsEvent(index) {
      let data = this.clientes[index].id;
      this.$emit("borrar", data);
    },
    updateClienteEvent(index) {
      let data = this.clientes[index];
      this.$emit("editar", data);
    },
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
}

li {
  margin: 2rem;
  border-radius: 5%;
  border: 2px solid black;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 1.1rem;
  font-weight: bold;
  background: #eee5e9;
  width: 10%;
}
</style>
