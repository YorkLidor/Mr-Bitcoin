<template>
  <Line :data="data" :options="options" />
</template>

<script lang="ts">
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "vue-chartjs";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export default {
  name: "App",
  components: {
    Line,
  },
  data() {
    return {
      data: {
        labels: this.dataaa.dates,
        datasets: [
          {
            label: "Market price history (USD)",
            backgroundColor: "#f87979",
            data: this.dataaa.prices,
          },
        ],
      },
      options: {
        responsive: true,
        // maintainAspectRatio: false,
      },
    };
  },
  props: {
    dataaa: {
      type: Object,
      required: true,
    },
  },
};
</script>
