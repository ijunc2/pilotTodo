import Vue from 'vue';
import Vuex from 'vuex';
import mutations from './mutations';
import actions from './actions'
import state from './state';
Vue.use(Vuex)

const store = new Vuex.Store({
  state,
  actions,
  mutations,
  getters: {
    fetchedNews: state => state.news,
    fetchedAsks: state => state.asks,
    fetchedJobs: state => state.jobs,
    fetchedUserInfo: state => state.user
  },
});

export default store;