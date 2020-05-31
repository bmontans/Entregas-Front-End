<template>
  <div class="contenedor">
    <div class="card" v-for="char in chars" :key="char.id">
      <img class="picture" :src="char.image" alt="Rick and morty character" />
      <h2>Name: {{char.name}}</h2>
      <p>ID: {{char.id}}</p>
      <p
        :class="{ green: char.status ==='Alive', red: char.status==='Dead',yellow:char.status==='unknown'}"
      >Status: {{char.status}}</p>
      <p>Race: {{char.species}}</p>
      <p>Gender: {{char.gender}}</p>
      <p>Planet of Origin: {{char.origin.name}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "CharCard",
  props: {
    chars: Array
  },
  status: String
};
</script>


<style scoped>
.contenedor {
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.card {
  width: 20%;
  background: #1993cc;
  border: 2px solid black;
  padding: 2rem;
  margin: 3rem;
  border-radius: 5%;
  transition: transform 0.9s ease;
}

.picture {
  border: 4px solid black;
  border-radius: 50%;
  width: 300px;
  height: 300px;
}

.card:hover {
  transform: scale(1.15);
}

.red {
  color: red;
}

.green {
  color: greenyellow;
}

.yellow {
  color: orange;
}
</style>
