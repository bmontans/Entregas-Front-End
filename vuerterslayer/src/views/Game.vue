<template>
  <div>
    <Game></Game>
  </div>
</template>

<script>
import Game from "@/components/Game.vue";

export default {
  name: "GameLanding",
  components: { Game },
  data() {
    return {
      playerHp: 80,
      enemyHp: 80,
      damage: null
    };
  }
};
</script>

