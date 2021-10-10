<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-ow">
      <router-link
        to="/products"
        v-on:click.native="goToHomePage()"
        class="m-auto"
        type="div"
      >
        <img src="../assets/logo.png" alt="logo" />
        <h1 class="navbar-brand font-italic">HappyShop</h1>
      </router-link>
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
  font-size: 2rem;
  font-family: "Times New Roman", Times, serif;
  margin: auto;
}
form {
  max-width: 1000px;
}
img {
  height: 3.6rem;
  margin-right: 1rem;
}
</style>
