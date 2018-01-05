const DEFAULT_TITLE = 'Vue SSR Demo';

function getTitle(vm) {
  const { title } = vm.$options;
  if (title) {
    return typeof title === 'function'
      ? title.call(vm)
      : title;
  }

  return null;
}

const serverTitleMixin = {
  created() {
    const title = getTitle(this);
    if (title) {
      this.$ssrContext.title = `${DEFAULT_TITLE} | ${title}`;
    }
  },
};

const clientTitleMixin = {
  mounted() {
    const title = getTitle(this);
    if (title) {
      document.title = `${DEFAULT_TITLE} | ${title}`;
    }
  },
};

export default process.env.VUE_ENV === 'server'
  ? serverTitleMixin
  : clientTitleMixin;
