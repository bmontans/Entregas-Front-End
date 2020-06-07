<template>
  <div>
    <ul>
      <li v-for="tag in tags" :key="tag.id">
        <a :href="tag.url">{{tag.name}}</a>
        <!-- url dinámica -->
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "tags",
  props: {
    tags: Array
  }
};
</script>


<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Titillium+Web&display=swap");

a {
  color: #e75a7c;
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
  height: 10%;
}
</style>
