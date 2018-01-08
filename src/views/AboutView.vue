<template>
  <div class="about">
    <header>about page</header>
    <div>{{1000 | parseDistance('chengdu')}}</div>
    <div>{{null | parseDistance('chengdu')}}</div>
  </div>
</template>

<script>
export default {
  name: 'about-view',
};
</script>

<style scoped>
</style>
