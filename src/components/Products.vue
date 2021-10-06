<template>
  <div style="padding: 25px">
    <div class="container">
      <div class="row">
        <div
          class="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-3"
          v-for="product in allProducts"
          :key="product.id"
        >
          <ProductCard :product="product" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
import ProductCard from "./ProductCard";
export default {
  computed: {
    ...mapGetters(["selectedProduct", "allProducts"]),
  },
  components: { ProductCard },
  methods: {
    ...mapActions(["getProduct", "getProducts"]),
  },
  mounted() {
    this.getProducts({});
  },
};
</script>
<style>
</style>