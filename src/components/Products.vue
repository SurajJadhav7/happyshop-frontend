<template>
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
    <nav>
      <ul class="pagination pagination-lg justify-content-center my-5">
        <li class="page-item" :class="isFirstPage()">
          <a class="page-link" href="#" @click="navigateToPreviousPage()"
            >Previous</a
          >
        </li>
        <li
          class="page-item"
          v-for="page in getTotalPages"
          :key="page"
          @click="navigate(page)"
        >
          <a class="page-link" href="#">{{ page }}</a>
        </li>
        <li class="page-item" :class="isLastPage()">
          <a class="page-link" href="#" @click="navigateToNextPage()">Next</a>
        </li>
      </ul>
    </nav>
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
</template>
<script>
import { mapActions, mapGetters } from "vuex";
import ProductCard from "./ProductCard";
export default {
  components: { ProductCard },
  computed: {
    ...mapGetters({
      getProducts: "getProducts",
      getTotalPages: "getTotalPages",
      getPage: "getPage",
    }),
  },
  methods: {
    ...mapActions(["fetchProduct", "fetchProducts", "changePage"]),
    navigate(page) {
      this.changePage(page);
      this.fetchProducts();
    },
    navigateToNextPage() {
      this.changePage(this.getPage + 1);
      this.fetchProducts();
    },
    navigateToPreviousPage() {
      this.changePage(this.getPage - 1);
      this.fetchProducts();
    },
    isFirstPage() {
      return this.getPage === 1 ? "disabled" : "";
    },
    isLastPage() {
      return this.getPage === this.getTotalPages ? "disabled" : "";
    },
  },
  mounted() {
    this.fetchProducts({});
  },
};
</script>