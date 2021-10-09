<template>
  <router-link class="card mb-4 shadow-sm" :to="productDetailsRoute(product)">
    <div class="discount float-right">
      <p class="my-0 sale-text">{{ product.sale_text }}</p>
    </div>
    <img :src="product.image" class="card-img-top product-image" />
    <div class="card-body">
      <p class="category">{{ product.category }}</p>
      <h5 class="card-title text-center product-name">
        {{ product.name }}
      </h5>
      <div class="row">
        <p class="price">${{ product.price }}</p>
        <p class="sale-price">${{ product.sale_price }}</p>
        <button
          v-if="product.sold_out"
          class="btn btn-dark btn-lg mx-auto bottom-right"
          disabled
        >
          Sold Out
        </button>
        <button v-else class="btn btn-primary btn-lg mx-auto bottom-right">
          Details
        </button>
      </div>
    </div>
  </router-link>
</template>
<script>
export default {
  name: "ProductCard",
  props: ["product"],
  methods: {
    productDetailsRoute(product) {
      return {
        name: "ProductDetails",
        params: {
          id: product.id,
        },
      };
    },
  },
};
</script>
<style>
p {
  margin: 5px;
}
.bottom-right {
  position: absolute;
  bottom: 10px;
  right: 10px;
}
.card .product-image {
  height: 300px;
}
.card-body {
  color: black !important;
}
.card:hover {
  transform: scale(1.1);
  transition: transform 0.2s;
}
a {
  text-decoration: none !important;
}
.product-name {
  margin-bottom: 50px;
  width: 70%;
  margin: auto auto 50px;
}
.price {
  text-decoration: line-through;
  position: absolute;
  bottom: 30px;
  left: 10px;
}
.sale-price {
  font-weight: bold;
  font-size: 1.3rem;
  position: absolute;
  bottom: 6px;
  left: 18px;
}
.discount {
  background-color: #f5f5f5;
  position: absolute;
  top: 8px;
  right: 0px;
}
.sale-text {
  font-weight: bold;
}
.category {
  font-size: 0.8rem;
  color: #777;
}
</style>