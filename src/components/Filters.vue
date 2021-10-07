<template>
  <div class="text-center">
    <div class="d-inline-block my-3">
      <FilterByCategory />
    </div>
    <div class="d-inline-block my-3">
      <FilterByPrice />
    </div>
    <div class="d-inline-block my-3">
      <SortByPrice />
    </div>
  </div>
</template>

<script>
import FilterByCategory from "./FilterByCategory.vue";
import FilterByPrice from "./FilterByPrice";
import SortByPrice from "./SortByPrice.vue";

export default {
  name: "Filters",
  components: {
    FilterByCategory,
    FilterByPrice,
    SortByPrice,
  },
};
</script>
