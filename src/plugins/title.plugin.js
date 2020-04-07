export default {
  install(Vue) {
    Vue.prototype.$title = function(titleKey) {
      const appTitle = "SUFFIX";
      return `${titleKey} | ${appTitle}`;
    };
  }
};
