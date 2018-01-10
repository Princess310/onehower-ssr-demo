import * as types from './mutations-types';

export default {
  setLanguage({ commit }, language) {
    commit(types.SET_LANGUAGE, language);
  },
};
