<template>
  <div>
    <NavBar />
    <Products />
  </div>
</template>
<script>
import NavBar from "./NavBar.vue";
import Products from "./Products.vue";

export default {
  components: { Products, NavBar },
  name: "Home",
};
</script>

<style>
body {
  padding-top: 70px;
}
.navbar-brand {
  font-size: 1.5rem;
  font-family: "Times New Roman", Times, serif;
  margin-left: 10%;
}
form {
  max-width: 1000px;
}
</style>
