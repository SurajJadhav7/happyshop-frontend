<template>
  <select
    class="category-filter"
    @change="onFilterByCategory($event.target.value)"
    :value="getCategory"
  >
    <option value="">Filter by Category</option>
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
    ...mapGetters(["getCategories", "getCategory"]),
  },
  methods: {
    ...mapActions(["fetchCategories"]),
    async onFilterByCategory(category) {
      await this.$router.push({
        name: "Products",
        query: { ...this.$route.query, currentPage: 1, category },
      });
    },
  },
  async beforeMount() {
    await this.fetchCategories();
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