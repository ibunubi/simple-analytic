import Vue from 'vue';
import Vuex from 'vuex';
import * as mutationTypes from './mutation-types';

var _ = require('lodash');

Vue.use(Vuex);

const BASE = data;

const state = {
  base: BASE,
  page: 1,
  perPage: 10,
  sortedColumn: '',
  sortedMode: ''
};

const getters = {
  allBase: state => state.base,
  getCurrentData: state => {
    let offset = (state.page - 1) * state.perPage,
      limit = state.page * state.perPage,
      pageResult = [];

    for (let i = offset; i < limit; i++) {
      pageResult.push(state.base[i]);
    }

    return pageResult;
  },
  getCurrentPage: state => {
    return {
      page: state.page,
      start: (state.page - 1) * state.perPage + 1,
      end: state.page * state.perPage
    };
  },
  getTotalPage: state => Math.ceil(state.base.length / state.perPage),
  getTotalData: state => state.base.length,
  getTopTld: state => {
    let groupBy = _.groupBy(state.base, 'TLD');

    let groupCount = [];
    _.map(groupBy, (item, idx) => {
      groupCount.push({ tld: idx, qty: item.length });
    });

    let sorted = _.orderBy(groupCount, ['qty'], ['desc']);

    let returnValue = { label: [], values: [] };
    _.mapKeys(sorted, (val, key) => {
      if (key > 9) return;
      returnValue.label.push(val.tld);
      returnValue.values.push(val.qty);
    });

    return returnValue;
  }
};

const mutations = {
  [mutationTypes.CHANGE_PAGE](state, payload) {
    state.page = state.page + payload;
  },
  [mutationTypes.GOTO_PAGE](state, payload) {
    state.page = payload;
  },
  [mutationTypes.ORDER_BY](state, payload) {
    if (state.sortedColumn != payload.column || state.sortedColumn == '') {
      state.sortedColumn = payload.column;
      state.sortedMode = 'ASC';
    } else {
      if (state.sortedMode == 'ASC') state.sortedMode = 'DESC';
      else state.sortedMode = 'ASC';
    }
    state.base = _.orderBy(state.base, [payload.column], [payload.mode]);
  }
};

const actions = {
  changePage({ commit }, payload) {
    commit(mutationTypes.CHANGE_PAGE, payload);
  },
  orderBy({ commit }, payload) {
    commit(mutationTypes.ORDER_BY, payload);
  },
  goToPage({ commit }, payload) {
    commit(mutationTypes.GOTO_PAGE, payload);
  }
};

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
});
