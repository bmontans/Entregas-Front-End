<template>
  <div>
    <menucustom></menucustom>
    <vue-headful title="TopTracks" />
    <tracks :tracks="tracks"></tracks>
    <footercustom></footercustom>
  </div>
</template>

<script>
import api from "@/api/index.js";
import tracks from "@/components/tracks.vue";
import footercustom from "@/components/FooterCustom.vue";
import menucustom from "@/components/MenuCustom.vue";

export default {
  name: "Toptracks",
  components: { tracks, footercustom, menucustom },
  data() {
    return {
      tracks: []
    };
  },
  created() {
    api
      .getTopTracks()
      .then(response => (this.tracks = response.data.tracks.track));
  }
};
</script>

<style>
</style>