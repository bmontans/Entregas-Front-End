<template>
  <div>
    <div id="nav">
      <!--  Cabecera común a todas las vistas -->
      <h1>Hack FM</h1>
      <router-link to="/">Home</router-link>
      <br />
    </div>
    <div id="router">
      <router-link to="/top-tracks">Top Tracks</router-link>|
      <router-link to="/top-artists">Top Artists</router-link>|
      <router-link to="/about">About</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "MenuCustom"
};
</script>

<style scoped>
#nav {
  padding: 1rem;
}

#router {
  color: #f094a9;
}

a {
  font-weight: bold;
  color: #f2f5ea;
  text-decoration: none;
}

a.router-link-exact-active {
  color: #7a9b76;
}
h1 {
  font-size: 50px;
  color: #f2f5ea;
  text-shadow: 2px 2px #e75a7c;
  margin: 1rem;
}
</style>