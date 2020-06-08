<template>
  <div>
    <div>
      <ul>
        <li v-for="track in tracks" :key="track.id">
          <a :href="track.url">{{ track.name }}</a>
          <p class="artist">by {{track.artist.name}}</p>
          <p class="listeners">{{ track.listeners }} listeners</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "tracks",
  props: {
    tracks: Array
  }
};
</script>

<style scoped>
a {
  color: #e75a7c;
}

li {
  width: 8rem;
  height: 9rem;
}
.artist {
  color: #f2f5ea;
}
.listeners {
  color: #7a9b76;
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
  border: 2px solid #e75a7c;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: Titillium Web;
  font-size: 1.1rem;
  font-weight: bold;
  background: #0e0004;
  opacity: 70%;
  width: 10%;
}
</style>
