<template>
  <div class="about">
    <h4>{{ $t("route.about") }}</h4>
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
