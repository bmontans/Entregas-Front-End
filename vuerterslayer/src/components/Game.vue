<template>
  <div>
    <!-- Barras de vida -->
    <div class="hpbars">
      <p>Player (you)</p>
      <div class="bar" :style="{width: playerHp + '%'}">{{playerHp}}</div>
      <p>Enemy</p>
      <div class="bar" :style="{width: enemyHp + '%'}">{{enemyHp}}</div>
    </div>
    <div class="options">
      <button @click="attack()">ATTACK</button>
      <button @click="specialAttack()">SPECIAL MOVE</button>
      <button @click="heal()">HEAL</button>
      <button @click="giveUp()">GIVE UP</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Game",
  data() {
    return {
      playerHp: 80,
      enemyHp: 80
    };
  },
  methods: {
    attack() {
      let damage = this.calculateDamage(3, 10);
      this.enemyHp -= damage;

      this.enemyAttack();
    },
    calculateDamage(min, max) {
      return Math.max(Math.floor(Math.random() * max) + 1, min);
    },
    enemyAttack() {
      let damage = this.calculateDamage(5, 12);
      this.playerHp -= damage;
    },
    heal() {
      if (this.playerHp <= 40) {
        let heal = this.calculateDamage(15, 20);
        this.playerHp += heal;

        this.enemyAttack();
      } else {
        this.enemyAttack();
      }
    },
    specialAttack() {
      if (this.playerHp <= 20) {
        let damage = this.calculateDamage(15, 20);
        this.enemyHp -= damage;

        this.enemyAttack();
      } else {
        this.enemyAttack();
      }
    },
    giveUp() {
      this.playerHp = 80;
      this.enemyHp = 80;
    }
  }
};
</script>

<style scoped>
.hpbars {
  text-align: center;
}

.bar {
  background: greenyellow;
  margin: auto;
  border-radius: 20px;
  height: 40px;
}
.options {
  width: 80%;
  padding: 1rem;
  border: 2px dashed black;
  margin: 1rem auto;
}

.options button {
  border: none;
  background: slategray;
  padding: 1rem;
  margin: 0.667rem;
  border-radius: 20px;
}
</style>