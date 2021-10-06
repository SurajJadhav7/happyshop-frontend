<template>
  <div class="text-center">
    <div class="d-inline-block">
      <label for="minPrice" class="ml-5">Min Price</label>
      <input
        @change="onFilterByMinPrice($event.target.value)"
        type="number"
        class="text-center price-filter ml-3"
        :value="getMinPrice"
        min="50"
        max="10000"
        maxlength="5"
      />
    </div>
    <div class="d-inline-block">
      <label for="minPrice" class="ml-5">Max Price</label>
      <input
        @change="onFilterByMaxPrice($event.target.value)"
        type="number"
        class="text-center price-filter mx-3"
        :value="getMaxPrice"
        min="50"
        max="10000"
      />
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "FilterByPrice",
  computed: {
    ...mapGetters({
      getMinPrice: "getMinPrice",
      getMaxPrice: "getMaxPrice",
    }),
  },
  methods: {
    ...mapActions(["fetchProducts", "changeMinPrice", "changeMaxPrice"]),
    async onFilterByMinPrice(minprice) {
      this.changeMinPrice(minprice);
      await this.fetchProducts();
    },
    async onFilterByMaxPrice(maxprice) {
      this.changeMaxPrice(maxprice);
      await this.fetchProducts();
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