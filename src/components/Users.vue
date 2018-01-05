<template>
  <div class="users">
    <section>
      <template v-for="(item, i) in users">
        <div :key="i">{{item.name}}</div>
      </template>
    </section>
  </div>
</template>

<script>
export default {
  name: 'comp-users',

  computed: {
    users() {
      return this.$store.state.user.list;
    },
  },
};
</script>

<style scoped>
.users {
  color: #ccc;
}
</style>
