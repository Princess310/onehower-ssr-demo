import user from '../../api/user';
import * as types from '../mutations-types';

// initial state
/* eslint no-shadow: ["error", { "allow": ["state"] }] */
const state = {
  list: [],
};

// getters
const getters = {

};

// actions
const actions = {
  async getUserList(context, params) {
    const list = await user.getUserList(params);
    context.commit(types.USER_GET_LIST, list);
  },
};

// mutations
const mutations = {
  [types.USER_GET_LIST](state, list) {
    state.list = list;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
