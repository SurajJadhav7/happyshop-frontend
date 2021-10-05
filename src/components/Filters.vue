<template>
  <div class="text-center">
    <div class="d-inline-block">
      <FilterByCategory />
    </div>
  </div>
</template>

<script>
import FilterByCategory from "./FilterByCategory.vue";

export default {
  name: "Filters",
  components: {
    FilterByCategory,
  },
};
</script>
