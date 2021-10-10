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
import { mapGetters } from "vuex";
export default {
  name: "FilterBySort",
  computed: {
    ...mapGetters({
      sortBy: "getSort",
    }),
  },
  methods: {
    async onSort(sort) {
      await this.$router.push({
        name: "Products",
        query: { ...this.$route.query, currentPage: 1, sort },
      });
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