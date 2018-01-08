<template>
  <div class="home">
    home page
    <button @click="updateInfo">update info</button>
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

  methods: {
    updateInfo() {
      this.$store.commit('UPDATE_USER', 'princess310');
    },
  },
};
</script>

<style scoped>
</style>
