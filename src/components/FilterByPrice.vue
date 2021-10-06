<template>
  <div class="text-center">
    <div class="d-inline-block ml-5">
      <select
        class="price-filter w-100"
        @change="onFilterByPrice($event.target.value)"
        :value="getPriceFilter"
      >
        <option value="" selected>Filter by Price</option>
        <option value="1">Under $1000</option>
        <option value="2">$1000 - $2000</option>
        <option value="3">$2000 - $4000</option>
        <option value="4">$4000 - $8000</option>
        <option value="5">Over $8000</option>
      </select>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "FilterByPrice",
  computed: {
    ...mapGetters({
      getPriceFilter: "getPriceFilter",
    }),
  },
  methods: {
    ...mapActions(["fetchProducts", "changePriceFilter"]),
    async onFilterByPrice(value) {
      this.changePriceFilter(value);
      await this.fetchProducts();
    },
  },
};
</script>

<style>
.price-filter {
  border-radius: 0.25rem;
  padding: 10px;
  border: 1px solid #ced4da;
  width: 100px;
}
</style>