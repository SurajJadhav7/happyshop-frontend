<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light fixed-top bg-ow">
      <router-link
        class="navbar-brand font-italic"
        to="/"
        v-on:click.native="goToHomePage()"
        >HappyShop</router-link
      >
      <form class="form-inline my-lg-1 mx-auto w-75" @submit="onSearch($event)">
        <input
          class="form-control mr-sm-2 w-75"
          type="search"
          name="search"
          :value="query"
        />
        <button class="btn btn-outline-success my-sm-0" type="submit">
          Search
        </button>
      </form>
    </nav>
  </div>
</template>

<script>
import { mapActions, mapMutations } from "vuex";
export default {
  computed: {
    query() {
      return this.$store.state.product.q;
    },
  },
  methods: {
    ...mapActions(["getProducts", "resetState"]),
    ...mapMutations(["setQ"]),
    async onSearch(e) {
      e.preventDefault();
      this.setQ(e.target.search.value);
      await this.getProducts();
    },
    goToHomePage() {
      this.resetState();
      this.getProducts();
    },
  },
};
</script>

<style scoped>
.bg-ow {
  background-color: #f9f9f9;
}
.navbar-brand {
  font-size: 1.5rem;
  font-family: "Times New Roman", Times, serif;
  margin-left: 13%;
}
form {
  max-width: 1000px;
}
</style>
