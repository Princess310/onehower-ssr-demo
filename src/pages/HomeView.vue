<template>
  <div class="home">
    home page
    <button @click="updateInfo">update info</button>
    <router-link to="/about">Go to About Page</router-link>
    <user-list></user-list>
  </div>
</template>

<script>
import Users from '../components/Users.vue';

export default {
  name: 'home-view',
  title: 'home page',
  components: {
    'user-list': Users,
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
