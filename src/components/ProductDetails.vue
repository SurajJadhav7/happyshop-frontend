<template>
  <div class="container">
    <div class="col-lg-10 main-section bg-white">
      <div class="row m-0">
        <div class="col-lg-6 p-0 m-0">
          <img class="w-100" :src="getProduct.image" />
        </div>
        <div class="col-lg-6">
          <div class="right-side p-3 m-0">
            <div class="row">
              <div class="col-lg-12">
                <span>{{ getProduct.category }}</span>
                <p class="m-0 p-0 text-lg-left">{{ getProduct.name }}</p>
              </div>
              <div class="col-lg-12">
                <h4 class="price-sale mr-1">${{ getProduct.sale_price }}</h4>
                <h2 class="m-0 p-0 price-pro mr-3">${{ getProduct.price }}</h2>
                <h5 class="d-inline">{{ getProduct.discount }}% OFF</h5>
                <hr class="p-0 my-3" />
              </div>
              <div class="col-lg-12 pt-2">
                <h5>Product Details</h5>
                <span
                  >Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris.</span
                >
                <hr class="pt-2 my-3" />
              </div>
              <div class="col-lg-12 mt-3">
                <h6>Quantity :</h6>
                <input
                  type="number"
                  class="text-center"
                  value="1"
                  min="1"
                  max="10"
                />
              </div>
              <div class="col-lg-12 mt-3">
                <button
                  v-if="getProduct.sold_out"
                  class="btn btn-dark btn-lg mx-auto bottom-right"
                  disabled
                >
                  Sold Out
                </button>
                <div v-else class="row">
                  <div class="col-lg-6 pb-2">
                    <a href="#" class="btn btn-danger w-100">Add To Cart</a>
                  </div>
                  <div class="col-lg-6">
                    <a href="#" class="btn btn-primary w-100">Buy Now</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters(["getProduct"]),
  },
  methods: {
    ...mapActions(["fetchProduct"]),
  },
  mounted() {
    this.fetchProduct(this.$route.params.id);
  },
};
</script>

<style>
body {
  font-family: "Roboto Condensed", sans-serif;
  background-color: #f5f5f5;
}

input {
  width: 50px;
}

.main-section {
  position: absolute;
  left: 50%;
  right: 50%;
  transform: translate(-50%, 5%);
  max-width: 1240px;
  padding: 0 0 10rem;
}

.right-side p {
  font-size: 30px;
  color: #000;
}

.right-side .price-sale {
  display: inline;
}

.right-side .price-pro {
  color: #3a3b3c;
  font-size: 1rem;
  text-decoration: line-through;
  display: inline;
}
</style>
