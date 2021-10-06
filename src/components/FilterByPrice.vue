<template>
  <div class="text-center">
    <div class="d-inline-block">
      <label for="minPrice" class="ml-5">Min Price</label>
      <input
        v-model="selectedMinPrice"
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
        v-model="selectedMaxPrice"
        @change="onFilterByMaxPrice($event.target.value)"
        type="number"
        class="text-center price-filter mx-3"
        value="50"
        min="50"
        max="10000"
      />
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "FilterByPrice",
  data() {
    return {
      selectedMinPrice: 50,
      selectedMaxPrice: 10000,
    };
  },
  methods: {
    ...mapActions(["getProducts"]),
    async onFilterByMinPrice(minprice) {
      this.selectedMinPrice = minprice;
      await this.getProducts({ minprice, maxprice: this.selectedMaxPrice });
    },
    async onFilterByMaxPrice(maxprice) {
      this.selectedMaxPrice = maxprice;
      await this.getProducts({ minprice: this.selectedMinPrice, maxprice });
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