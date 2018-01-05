import Vue from 'vue';
import Vuex from 'vuex';

import actions from './actions';
import mutations from './mutations';
import getters from './getters';

import user from './modules/user';

Vue.use(Vuex);

export function createStore() {
  return new Vuex.Store({
    state: {
      username: 'prince',
    },
    actions,
    mutations,
    getters,
    modules: {
      user,
    },
  });
}
