<template>
  <select
    v-model="selectedSort"
    class="price-sort w-100"
    @change="onSort($event.target.value)"
  >
    <option value="" selected>Sort</option>
    <option value="lowtohigh">Price: Low to High</option>
    <option value="hightolow">Price: High to Low</option>
  </select>
</template>

<script>
import { mapActions, mapMutations } from "vuex";
export default {
  name: "FilterBySort",
  data() {
    return {
      selectedSort: "",
    };
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