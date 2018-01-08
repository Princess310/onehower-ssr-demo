import Vue from 'vue';
import { sync } from 'vuex-router-sync';

import 'sanitize.css/sanitize.css';

import App from './App.vue';
import { createStore } from './store';
import { createRouter } from './router';
import titleMixin from './util/title';
import * as filters from './util/filters';
import { install } from './components/index';

// mixin for handling title
Vue.mixin(titleMixin);

// register global utility filters.
Object.keys(filters).forEach((key) => {
  Vue.filter(key, filters[key]);
});

// register components
install(Vue);

export function createApp() {
  // create store and router instances
  const store = createStore();
  const router = createRouter();

  // sync the router with the vuex store.
  // this registers `store.state.route`
  sync(store, router);

  // create the app instance.
  // here we inject the router, store and ssr context to all child components,
  // making them available everywhere as `this.$router` and `this.$store`
  const app = new Vue({
    router,
    store,
    render: h => h(App),
  });
  return { app, router, store };
}
