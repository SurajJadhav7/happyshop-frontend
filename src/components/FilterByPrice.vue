<template>
  <div class="text-center">
    <div class="d-inline-block">
      <label for="minPrice" class="ml-5">Min Price</label>
      <input
        @change="onFilterByMinPrice($event.target.value)"
        type="number"
        class="text-center price-filter ml-3"
        value="50"
        min="50"
        max="10000"
      />
    </div>
    <div class="d-inline-block">
      <label for="minPrice" class="ml-5">Max Price</label>
      <input
        @change="onFilterByMaxPrice($event.target.value)"
        type="number"
        class="text-center price-filter mx-3"
        value="10000"
        min="50"
        max="10000"
      />
    </div>
  </div>
</template>

<script>
import { mapActions, mapMutations } from "vuex";
export default {
  name: "FilterByPrice",
  methods: {
    ...mapActions(["getProducts"]),
    ...mapMutations(["setMinPrice", "setMaxPrice"]),
    async onFilterByMinPrice(minprice) {
      this.setMinPrice(minprice);
      await this.getProducts();
    },
    async onFilterByMaxPrice(maxprice) {
      this.setMaxPrice(maxprice);
      await this.getProducts();
    },
  },
};
</script>

<style>
.price-filter {
  border-radius: 0.25rem;
  padding: 7px;
  border: 1px solid #ced4da;
  width: 100px;
}
</style>