import Vue from 'vue';
import VueI18n from 'vue-i18n';

import enLocale from './en';
import zhLocale from './zh';

Vue.use(VueI18n);

const messages = {
  en: {
    ...enLocale,
  },
  zh: {
    ...zhLocale,
  },
};

export function createLanguage({ language }) {
  return new VueI18n({
    locale: language || 'zh', // set locale
    messages, // set locale messages
  });
}
