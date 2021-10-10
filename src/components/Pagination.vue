<template>
  <div class="overflow-auto">
    <b-pagination
      v-model="currentPage"
      class="pagination-lg justify-content-center my-5 flex-sm-wrap"
      :total-rows="rows"
      :per-page="perPage"
      first-text="First"
      prev-text="Prev"
      next-text="Next"
      last-text="Last"
    ></b-pagination>
  </div>
</template>

<script>
import { BPagination } from "bootstrap-vue";
import { mapGetters } from "vuex";
export default {
  components: {
    BPagination,
  },
  computed: {
    ...mapGetters({
      rows: "getTotalResults",
      getCurrentPage: "getCurrentPage",
    }),
    currentPage: {
      get() {
        return this.getCurrentPage;
      },
      set(val) {
        this.onPageChange(val);
      },
    },
  },
  methods: {
    async onPageChange(page) {
      await this.$router.push({
        name: "Products",
        query: { ...this.$route.query, currentPage: page },
      });
    },
  },
  data() {
    return {
      perPage: 24,
    };
  },
};
</script>