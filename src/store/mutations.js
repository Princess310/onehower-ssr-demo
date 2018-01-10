import Cookies from 'js-cookie';

import * as types from './mutations-types';

export default {
  [types.UPDATE_USER](state, username) {
    state.username = username;
  },
  [types.SET_LANGUAGE](state, language) {
    state.language = language;
    Cookies.set('language', language);
  },
};
