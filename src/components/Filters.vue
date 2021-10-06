<template>
  <div class="text-center">
    <div class="d-inline-block">
      <FilterByCategory />
    </div>
    <div class="d-inline-block">
      <FilterByPrice />
    </div>
    <div class="d-inline-block">
      <SortByPrice />
    </div>
  </div>
</template>

<script>
import FilterByCategory from "./FilterByCategory.vue";
import FilterByPrice from "./FilterByPrice.vue";
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
