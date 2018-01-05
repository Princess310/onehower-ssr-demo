import Vue from 'vue';
import { sync } from 'vuex-router-sync';
import App from './App.vue';
import { createStore } from './store';
import { createRouter } from './router';
import titleMixin from './util/title';

// mixin for handling title
Vue.mixin(titleMixin);

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
