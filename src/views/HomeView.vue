<template>
  <div class="home">
    <h4>{{ $t("route.home") }}</h4>
    <button @click="updateInfo">update info</button>
    <section>
      <input type="radio" id="en" value="en" v-model="lang">
      <label for="en">en</label>
      <br>
      <input type="radio" id="zh" value="zh" v-model="lang">
      <label for="zh">zh</label>
      <br>
      <span>lang: {{lang}}</span>
    </section>
    <router-link to="/about">Go to About Page</router-link>
    <user-list></user-list>
    <oh-icon :type="require('../icons/github.svg')"></oh-icon>
  </div>
</template>

<script>
import UsersView from './UsersView.vue';

export default {
  name: 'home-view',
  title: 'home page',
  components: {
    'user-list': UsersView,
  },
  asyncData({ store }) {
    return store.dispatch('getUserList');
  },
  computed: {
    lang: {
      get() {
        return this.$store.state.language;
      },
      set(lang) {
        this.$i18n.locale = lang;
        this.$store.dispatch('setLanguage', lang);
      },
    },
  },
  methods: {
    updateInfo() {
      this.$store.commit('UPDATE_USER', 'princess310');
    },
  },
};
</script>

<style scoped>
</style>
