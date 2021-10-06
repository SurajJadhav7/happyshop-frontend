<template>
  <div class="text-center">
    <div class="d-inline-block">
      <FilterByCategory />
    </div>
    <div class="d-inline-block">
      <FilterByPrice />
    </div>
  </div>
</template>

<script>
import FilterByCategory from "./FilterByCategory.vue";
import FilterByPrice from "./FilterByPrice.vue";

export default {
  name: "Filters",
  components: {
    FilterByCategory,
    FilterByPrice,
  },
};
</script>
