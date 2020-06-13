<template>
  <div class="market">
    <menucustom></menucustom>
    <div class="producto" v-for="producto in productos" :key="producto.id">
      <h1>{{ producto.nombre }} {{ producto.apellido }}</h1>
      <p>ID: {{ producto.id }}</p>
      <img class="picture" :src="producto.img" alt="Imagen del producto" />
      <p>DESCRIPCION: {{ producto.descripcion }}</p>
      <p>PRECIO: {{ producto.precio }}€</p>
      <p>UNIDADES DISPONIBLES: {{ producto.stock }}</p>
      <br />
      <br />
    </div>
  </div>
</template>

<script>
import menucustom from "@/components/MenuCustom.vue";
import axios from "axios";

export default {
  name: "Market",
  components: { menucustom },
  data() {
    return {
      productos: [],
      modal: false,
    };
  },
  methods: {
    getProducts() {
      var self = this;
      axios
        .get("http://localhost:3050/productos")
        .then(function(response) {
          console.log(response);
          self.productos = response.data;
        })
        .catch(function(error) {
          console.log(error);
        });
    },
  },
  created() {
    this.getProducts();
  },
};
</script>

<style scoped></style>
