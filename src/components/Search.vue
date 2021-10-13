<template>
  <div class="m-auto w-50">
    <form
      class="form-inline"
      @submit="onSearch($event, $event.target.search.value)"
    >
      <input
        class="form-control m-3 w-75"
        type="search"
        name="search"
        :value="getQuery"
      />
      <button class="btn btn-outline-primary m-3" type="submit">Search</button>
    </form>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["getQuery"]),
  },
  methods: {
    async onSearch(e, query) {
      e.preventDefault();
      await this.$router.push({
        name: "Products",
        query: { ...this.$route.query, currentPage: 1, query },
      });
    },
  },
};
</script>