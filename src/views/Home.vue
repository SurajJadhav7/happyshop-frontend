<template>
  <div>
    <div>
      <nav class="navbar navbar-expand-lg navbar-light fixed-top">
        <router-link class="navbar-brand font-italic" to="/"
          >HappyShop</router-link
        >
        <form class="form-inline my-lg-1 mx-auto w-75">
          <input
            class="form-control mr-sm-2 w-75"
            type="search"
            aria-label="Search"
          />
          <button class="btn btn-outline-success my-sm-0" type="submit">
            Search
          </button>
        </form>
      </nav>
    </div>
    <div class="page-container">
      <router-view />
    </div>
  </div>
</template>
<script>
export default {
  name: "Home",
};
</script>

<style>
.navbar-brand {
  font-size: 1.5rem;
  font-family: "Times New Roman", Times, serif;
  margin-left: 10%;
}
form {
  max-width: 1000px;
}
</style>
