<template>
  <form
    class="form-inline my-lg-1 mx-auto w-75"
    @submit="onSearch($event, $event.target.search.value)"
  >
    <input
      class="form-control mr-sm-2 w-75"
      type="search"
      name="search"
      :value="getQuery"
    />
    <button class="btn btn-outline-primary my-sm-0" type="submit">
      Search
    </button>
  </form>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  computed: {
    ...mapGetters(["getQuery"]),
  },
  methods: {
    ...mapActions(["fetchProducts", "changeQuery"]),
    async onSearch(e, query) {
      e.preventDefault();
      this.changeQuery(query);
      await this.fetchProducts();
    },
  },
};
</script>