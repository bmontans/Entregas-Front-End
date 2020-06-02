<template>
  <div>
    <InitialMenu></InitialMenu>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";
import Game from "@/components/Game.vue";
import InitialMenu from "@/components/InitialMenu.vue";

export default {
  name: "Home",
  components: { Game, InitialMenu }
};
</script>
