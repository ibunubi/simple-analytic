<template>
  <div class="row">
    <div class="col-sm-8">
      <button class="btn btn-sm btn-outline-info" @click="goToPage(1)"><span class="fa fa-fast-backward"></span></button>
      <button class="btn btn-sm btn-outline-info" @click="changePage(-1)" :disabled="currentPage.page == 1"><span class="fa fa-step-backward"></span></button>

      <button class="btn btn-sm btn-outline-info" @click="changePage(1)" :disabled="currentPage.page == totalPage"><span class="fa fa-step-forward"></span></button>
      <button class="btn btn-sm btn-outline-info" @click="goToPage(totalPage)"><span class="fa fa-fast-forward"></span></button>
    </div>
    <div class="col-sm-4 text-right">
      {{ `${currentPage.start} - ${currentPage.end} of ${totalPage}` }} 
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import * as mutationTypes from '../store/mutation-types';

export default {
  computed: mapGetters({
    currentPage: 'getCurrentPage',
    totalPage: 'getTotalPage'
  }),
  methods: mapActions(['changePage', 'goToPage'])
};
</script>

<style scoped>
</style>