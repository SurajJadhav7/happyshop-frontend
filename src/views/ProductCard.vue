<template>
  <div class="card mb-4 shadow-sm">
    <div class="discount float-right">
      <p class="my-0 sale-text">{{ product.sale_text }}</p>
    </div>
    <img
      src="https://lorempixel.com/300/400/abstract/"
      class="card-img-top product-image"
    />
    <div class="card-body">
      <p class="category">{{ product.category }}</p>
      <h5 class="card-title text-center">{{ product.name }}</h5>
      <div class="row">
        <p class="price">${{ product.price }}</p>
        <p class="sale-price">${{ product.sale_price }}</p>
        <button
          v-if="product.sold_out"
          class="btn btn-dark btn-lg mx-auto"
          disabled
        >
          Sold Out
        </button>
        <router-link
          v-else
          type="button"
          class="btn btn-primary btn-lg mx-auto"
          :to="'/details/' + product.id"
          >Details</router-link
        >
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Product",
  props: ["product"],
};
</script>
<style>
p {
  margin: 5px;
}
.card .product-image {
  height: 300px;
}
.price {
  text-decoration: line-through;
}
.sale-price {
  font-weight: bold;
  font-size: 1rem;
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