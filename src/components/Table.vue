<template>
  <div>
    <table class="table table-hover">
      <thead>
        <tr>
          <th @click='orderBy({column: "GlobalRank"})'>Global Rank</th>
          <th @click='orderBy({column: "TldRank"})'>TLD Rank</th>
          <th @click='orderBy({column: "Domain"})'>Domain</th>
          <th @click='orderBy({column: "RefSubNets"})'>Ref Sub Nets</th>
          <th @click='orderBy({column: "RefIPs"})'>Ref IPs</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(row, index) in data">
          <td>{{ row.GlobalRank }}</td>
          <td>{{ row.TldRank }}</td>
          <td>{{ row.Domain }}</td>
          <td>{{ row.RefSubNets }}</td>
          <td>{{ row.RefIPs }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
export default {
  computed: mapGetters({
    data: 'getCurrentData'
  }),
  methods: mapActions({
    orderBy: 'orderBy'
  })
};
</script>

<style scoped>
</style>