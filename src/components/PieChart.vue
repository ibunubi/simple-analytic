<template>
  <div>
    <canvas id="statistic-chart"></canvas>
  </div>
</template>

<script>
import Chart from 'chart.js';

export default {
  mounted() {
    let topTen = this.$store.getters.getTopTld;

    let default_colors = [
      '#3366CC',
      '#DC3912',
      '#FF9900',
      '#109618',
      '#990099',
      '#3B3EAC',
      '#0099C6',
      '#DD4477',
      '#66AA00',
      '#B82E2E',
      '#316395',
      '#994499',
      '#22AA99',
      '#AAAA11',
      '#6633CC',
      '#E67300',
      '#8B0707',
      '#329262',
      '#5574A6',
      '#3B3EAC'
    ];

    let chartData = {
      type: 'pie',
      data: {
        datasets: [
          {
            data: topTen.values,
            backgroundColor: default_colors
          }
        ],
        labels: topTen.label
      },
      options: {
        responsive: true,
        legend: {
          display: true,
          position: 'right'
        }
      }
    };

    const ctx = document.getElementById('statistic-chart');
    const myChart = new Chart(ctx, {
      type: chartData.type,
      data: chartData.data,
      options: chartData.options
    });
  }
};
</script>

<style scoped>
</style>