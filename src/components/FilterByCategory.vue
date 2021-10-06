<template>
  <select
    v-model="selectedCategory"
    class="category-filter"
    @change="onFilterByCategory($event.target.value)"
  >
    <option value="" selected>Filter by Category</option>
    <option v-for="category in categories" :key="category" :value="category">
      {{ category }}
    </option>
  </select>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "FilterByCategory",
  data() {
    return {
      categories: [],
      selectedCategory: "",
    };
  },
  computed: {
    ...mapGetters(["allCategories"]),
  },
  methods: {
    ...mapActions(["getCategories", "getProducts"]),
    async onFilterByCategory(category) {
      this.selectedCategory = category;
      await this.getProducts({ category });
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