<template>
  <div>
    <Filters />
    <div v-if="getProducts.length" style="padding: 25px">
      <div class="container">
        <div class="row">
          <div
            class="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-3"
            v-for="product in getProducts"
            :key="product.id"
          >
            <ProductCard :product="product" />
          </div>
        </div>
      </div>
      <Pagination />
    </div>
    <div v-else>
      <div class="container text-center py-5">
        <div class="row d-block">
          <h4 class="alert-heading">
            <i class="fa fa-info-circle"></i>
            No products found
          </h4>
          <p>There are no products to display for above Criteria.</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
import ProductCard from "./ProductCard";
import Pagination from "./Pagination";
import Filters from "./Filters";

export default {
  components: { ProductCard, Pagination, Filters },
  computed: {
    ...mapGetters({
      getProducts: "getProducts",
    }),
  },
  methods: {
    ...mapActions(["changeState", "fetchProducts"]),
  },
  async created() {
    const url_params = this.$route.query;
    await this.changeState(url_params);
    this.fetchProducts({});
  },
  watch: {
    async $route() {
      const url_params = this.$route.query;
      await this.changeState(url_params);
      this.fetchProducts({});
    },
  },
};
</script>