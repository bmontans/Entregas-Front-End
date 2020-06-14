<template>
  <div class="market">
    <vue-headful title="Lista de productos" />
    <div class="producto" v-for="producto in productos" :key="producto.id">
      <ul>
        <li>
          <h1>{{ producto.nombre }} {{ producto.apellido }}</h1>
          <p>ID: {{ producto.id }}</p>
          <img class="picture" :src="producto.img" alt="Imagen del producto" />
          <p>DESCRIPCION: {{ producto.descripcion }}</p>
          <p>PRECIO: {{ producto.precio }}€</p>
          <p>UNIDADES DISPONIBLES: {{ producto.stock }}</p>
          <br />
          <button @click="buyProduct()">COMPRAR</button>
          <br />
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Swal from "sweetalert2";

export default {
  name: "Market",
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
    buyProduct() {
      Swal.fire(
        "¡Producto añadido al carrito de compra!",
        "Pulsa OK para continuar.",
        "success"
      );
    },
  },
  created() {
    this.getProducts();
  },
};
</script>

<style scoped>
img {
  border-radius: 50%;
}

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
  width: 50%;
}
</style>
