<template>
  <div class="market">
    <menucustom></menucustom>
    <marketcustom></marketcustom>
  </div>
</template>

<script>
import menucustom from "@/components/MenuCustom.vue";
import marketcustom from "@/components/MarketCustom.vue";
import axios from "axios";

export default {
  name: "Market",
  components: { menucustom, marketcustom }
};
</script>

<style scoped></style>
