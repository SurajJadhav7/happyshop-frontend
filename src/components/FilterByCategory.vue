<template>
  <select
    class="category-filter"
    @change="onFilterByCategory($event.target.value)"
    :value="selectedCategory"
  >
    <option value="" selected>Filter by Category</option>
    <option v-for="category in categories" :key="category" :value="category">
      {{ category }}
    </option>
  </select>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from "vuex";
export default {
  name: "FilterByCategory",
  data() {
    return {
      categories: [],
    };
  },
  computed: {
    ...mapGetters(["allCategories"]),
    selectedCategory() {
      return this.$store.state.product.category;
    },
  },
  methods: {
    ...mapActions(["getCategories", "getProducts"]),
    ...mapMutations(["setCategory"]),
    async onFilterByCategory(category) {
      this.setCategory(category);
      await this.getProducts();
    },
  },
  async created() {
    await this.getCategories();
    this.categories = this.allCategories;
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