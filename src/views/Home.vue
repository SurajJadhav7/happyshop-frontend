<template>
  <div>
    <Filters />
    <Products />
  </div>
</template>
<script>
import Products from "../components/Products.vue";
import Filters from "../components/Filters.vue";

export default {
  components: { Products, Filters },
  name: "Home",
};
</script>

<style>
body {
  padding-top: 70px;
}
</style>
