<template>
  <div class="text-center"></div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "Filters",
  data() {
    return {
      categories: [],
    };
  },
  computed: {
    ...mapGetters(["allCategories"]),
  },
  methods: {
    ...mapActions(["getCategories"]),
  },
  async created() {
    await this.getCategories();
    this.categories = this.allCategories;
  },
};
</script>

<style>
</style>