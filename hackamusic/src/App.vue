<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style>
/* Estilos generales de la web */
@import url("https://fonts.googleapis.com/css2?family=Comfortaa&display=swap");

body {
  margin: 0;
  box-sizing: border-box;
}

html,
body {
  background: #6b0f1a;
  height: 100vh;
}
#app {
  font-family: Comfortaa;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background: #6b0f1a;
}

a {
  font-weight: bold;
  color: #e75a7c;
  text-decoration: none;
}
</style>
