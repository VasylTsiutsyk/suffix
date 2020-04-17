import Vue from "vue";
import App from "@/App.vue";
import router from "@/router";
import store from "@/store";

import VueMeta from "vue-meta";
import { i18n } from "@/plugins/i18n";
import TitlePlugin from "@/plugins/title.plugin";
import Modernizr from "@/plugins/modernizr";

import "@/global-register";

Vue.use(Modernizr);
Vue.use(TitlePlugin);
Vue.use(VueMeta);

Vue.config.productionTip = false;

new Vue({
    router,
    store,
    i18n,
    render: h => h(App)
}).$mount("#app");