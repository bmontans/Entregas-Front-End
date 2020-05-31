<template>
  <div class="home">
    <!-- PRINTEANDO MI ARRAY DE LA API -->
    <figure>
      <img
        class="logo"
        src="../assets/logo.png"
        alt="Rick and Morty logo"
        title="Rick and morty logo"
      />
    </figure>

    <!-- BARRA DE BÚSQUEDA -->
    <label for="bySearch">Search your character</label>
    |
    <input
      v-model="search"
      id="search"
      name="bySearch"
      type="search"
      placeholder="Search by name, status, ID..."
    />

    <CharCard :chars="filteredChars"></CharCard>
    <Footer></Footer>
  </div>
</template>

<script>
import CharCard from "@/components/CharCard.vue";
import Footer from "@/components/Footer.vue";
// IMPORTANDO LA CONFIGURACION API
import api from "@/api/api.js";

export default {
  name: "Home",
  components: {
    CharCard,
    Footer
  },
  data() {
    return {
      chars: [],
      search: "",
      publicPath: process.env.BASE_URL
    };
  },
  computed: {
    filteredChars() {
      // SI SEARCH ESTÁ VACÍO
      if (!this.search) {
        return this.chars;
      }
      // SI SEARCH TIENE ALGO
      return this.chars.filter(
        char =>
          char.name.toLowerCase().includes(this.search.toLowerCase()) ||
          char.status.toLowerCase().includes(this.search.toLowerCase()) ||
          char.gender.toLowerCase().includes(this.search.toLowerCase()) ||
          char.id.toString().includes(this.search)
      );
    }
  },
  created() {
    api.getAll().then(response => (this.chars = response.data.results));
  }
};
</script>

<style scoped>
.home {
  background: #97ce4c;
  height: 100%;
}

.logo {
  transition: transform 0.9s ease;
}

.logo:hover {
  transform: scale(1.25);
}
</style>
