import Icon from './Icon';

const components = [
  Icon,
];

const install = function (Vue, opts = {}) {
  console.log('opts', opts);
  components.forEach((component) => {
    Vue.component(component.name, component);
  });
};

export {
  install,
  Icon,
};
