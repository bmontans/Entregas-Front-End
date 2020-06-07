<template>
  <div>
    <div>
      <ul>
        <li v-for="artist in artists" :key="artist.id">
          <a :href="artist.url">{{artist.name}}</a>
          <br />
          <img :src="artist.image[2]['#text']" />
          <p>{{artist.listeners}} listeners</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "artists",
  props: {
    artists: Array
  }
};
</script>


<style scoped>
a {
  color: #e75a7c;
}
li {
  width: 15rem;
}
p {
  color: #7a9b76;
}
img {
  opacity: 0.4;
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


