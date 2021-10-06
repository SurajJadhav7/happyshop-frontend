<template>
  <select
    class="price-sort w-100 ml-5"
    @change="onSort($event.target.value)"
    :value="sortBy"
  >
    <option value="" selected>Sort By Price</option>
    <option value="lowtohigh">Price: Low to High</option>
    <option value="hightolow">Price: High to Low</option>
  </select>
</template>

<script>
import { mapActions, mapMutations } from "vuex";
export default {
  name: "FilterBySort",
  computed: {
    sortBy() {
      return this.$store.state.product.sort;
    },
  },
  methods: {
    ...mapActions(["getProducts"]),
    ...mapMutations(["setSort"]),
    async onSort(sort) {
      this.setSort(sort);
      await this.getProducts();
    },
  },
};
</script>

<style>
.price-sort {
  border-radius: 0.25rem;
  padding: 10px;
  border: 1px solid #ced4da;
}
</style>