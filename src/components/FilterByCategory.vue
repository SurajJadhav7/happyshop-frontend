<template>
  <select
    class="category-filter"
    @change="onFilterByCategory($event.target.value)"
    :value="selectedCategory"
  >
    <option value="" selected>Filter by Category</option>
    <option v-for="category in getCategories" :key="category" :value="category">
      {{ category }}
    </option>
  </select>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "FilterByCategory",
  computed: {
    ...mapGetters({
      selectedCategory: "getCategory",
      getCategories: "getCategories",
    }),
  },
  methods: {
    ...mapActions(["fetchCategories", "fetchProducts", "changeCategory"]),
    async onFilterByCategory(category) {
      this.changeCategory(category);
      await this.fetchProducts();
    },
  },
  async created() {
    await this.fetchCategories();
    this.categories = this.getCategories;
  },
};
</script>

<style>
.category-filter {
  border-radius: 0.25rem;
  padding: 10px;
  border: 1px solid #ced4da;
}
</style>