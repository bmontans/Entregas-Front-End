<template>
  <div>
    <p>{{ copyright }}</p>
  </div>
</template>

<script>
export default {
  name: "footercustom",
  data() {
    return {
      copyright: "Brais Montáns Bouza - 2020"
    };
  }
};
</script>

<style scoped>
p {
  color: #f2f5ea;
  font-weight: bold;
  font-style: italic;
  margin: 3rem;
}
</style>
