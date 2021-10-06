<template>
  <div class="text-center">
    <div class="d-inline-block ml-5">
      <select
        class="price-sort w-100"
        @change="onSort($event.target.value)"
        :value="sortBy"
      >
        <option value="" selected>Sort By Price</option>
        <option value="lowtohigh">Price: Low to High</option>
        <option value="hightolow">Price: High to Low</option>
      </select>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "FilterBySort",
  computed: {
    sortBy() {
      return this.getSort;
    },
  },
  methods: {
    ...mapActions(["fetchProducts", "changeSort"]),
    async onSort(sort) {
      this.changeSort(sort);
      await this.fetchProducts();
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