<template>
  <div class="charts-container">
    <Chart :dataaa="data" v-if="data" />
  </div>
</template>

<script>
import Chart from "../cmps/chart.vue";

export default {
  async created() {
    this.$store.dispatch({ type: "loadData" });
  },
  computed: {
    data() {
      return this.$store.state.bitcoinStore.data;
    },
  },
  components: {
    Chart,
  },
};
</script>

<style scoped>
.charts-container {
  padding-top: 45px;
}
</style>