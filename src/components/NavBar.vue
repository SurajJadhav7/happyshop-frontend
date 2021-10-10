<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-ow">
      <router-link
        class="navbar-brand font-italic"
        to="/products"
        v-on:click.native="goToHomePage()"
        >HappyShop</router-link
      >
      <Search />
    </nav>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import Search from "./Search.vue";

export default {
  components: { Search },
  methods: {
    ...mapActions(["callResetState"]),
    async goToHomePage() {
      this.callResetState();
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
