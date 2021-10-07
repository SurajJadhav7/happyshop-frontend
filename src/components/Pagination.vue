<template>
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
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  computed: {
    ...mapGetters({
      getTotalPages: "getTotalPages",
      getPage: "getPage",
    }),
  },
  methods: {
    ...mapActions(["fetchProducts", "changePage"]),
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
};
</script>

<style>
</style>