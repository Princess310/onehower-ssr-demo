<template>
  <div>
    <svg :width="size" :height="size" :color="color">
      <use :xlink:href="`#${type.default.id}`" />
    </svg>
  </div>
</template>

<script>
export default {
  name: 'oh-icon',
  props: {
    type: Object,
    size: {
      type: String,
      default: '24px',
    },
    color: {
      type: String,
      default: '#cccccc',
    },
  },
};
</script>

<style scoped>
</style>
