<template>
  <div class="text-center">
    <div class="d-inline-block ml-5">
      <select
        class="price-filter w-100"
        @change="onFilterByPrice($event.target.value)"
        :value="getPriceFilter"
      >
        <option value="" selected>Filter by Price</option>
        <option value="0">Under ${{ getMaxPrices[0] }}</option>
        <option :value="i" v-for="i in getMinPrices.length - 2" :key="i">
          ${{ getMinPrices[i] }} - ${{ getMaxPrices[i] }}
        </option>
        <option :value="getMinPrices.length - 1">
          Over ${{ getMinPrices[getMinPrices.length - 1] }}
        </option>
      </select>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "FilterByPrice",
  computed: {
    ...mapGetters({
      getPriceFilter: "getPriceFilter",
      getMinPrices: "getMinPrices",
      getMaxPrices: "getMaxPrices",
    }),
  },
  methods: {
    async onFilterByPrice(value) {
      await this.$router.push({
        name: "Products",
        query: { ...this.$route.query, currentPage: 1, priceFilter: value },
      });
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