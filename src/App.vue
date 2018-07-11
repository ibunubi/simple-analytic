<template>
  <div id="app">
    <Header />
    <nav-bar />
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-8 pt-4 pb-4 pl-4 pr-2">
          <div class="panel">
            <p class="lead pl-3 pr-3 pt-1 pb-1">Data Browser</p>
            <div class="p-3">
              <Table />
              <Pagination />
            </div>
          </div>
        </div>
        <div class="col-md-4 pt-4 pr-4 pb-4 pl-2">
          <div class="panel">
            <p class="lead pl-3 pr-3 pt-1 pb-1">Top 10 TLD</p>
            <div class="p-3">
              <pie-chart />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from './components/Header';
import NavBar from './components/NavBar';
import Table from './components/Table';
import Pagination from './components/Pagination';
import PieChart from './components/PieChart';

export default {
  name: 'app',
  components: {
    Header,
    NavBar,
    Table,
    Pagination,
    PieChart
  },
  data() {
    return {
      dataChart: {
        labels: ['January', 'February'],
        datasets: [
          {
            label: 'GitHub Commits',
            backgroundColor: '#f87979',
            data: [40, 20]
          }
        ]
      }
    };
  }
};
</script>

<style lang="scss">
@import url('./assets/scss/style.scss');
</style>
