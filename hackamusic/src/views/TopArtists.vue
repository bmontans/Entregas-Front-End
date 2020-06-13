<template>
  <div>
    <menucustom></menucustom>
    <vue-headful title="TopArtists" />
    <br />
    <label for="bySearch">Try searching your favourite artist!</label>
    <br />
    <input v-model="search" id="search" name="bySearch" type="search" placeholder="Search..." />
    <artists :artists="filteredArtists"></artists>
    <footercustom></footercustom>
  </div>
</template>

<script>
import api from "@/api/index.js";
import artists from "@/components/artists.vue";
import footercustom from "@/components/FooterCustom.vue";
import menucustom from "@/components/MenuCustom.vue";

export default {
  name: "Topartist",
  components: {
    artists,
    footercustom,
    menucustom
  },
  data() {
    return {
      artists: [],
      search: "",
      artist: []
    };
  },
  computed: {
    /* función para buscar y filtrar los artistas más escuchados*/
    filteredArtists() {
      if (!this.search) {
        return this.artists.sort((
          a,
          b /*esto nos lo ordena según tengan más oyentes */
        ) => (a.listeners < b.listeners ? 1 : -1));
      } else {
        return this.artists.filter(artist =>
          artist.name.toLowerCase().includes(this.search.toLowerCase())
        );
      }
    }
  },
  created() {
    api;
    api
      .getArtists()
      .then(response => (this.artists = response.data.topartists.artist));
  }
};
</script>

<style>
label {
  font-style: oblique;
  color: #f2f5ea;
  margin: 1rem;
}
input {
  margin: 1rem;
}
</style>