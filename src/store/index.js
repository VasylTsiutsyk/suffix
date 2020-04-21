import Vue from "vue";
import Vuex from "vuex";

import auth from "@/store/auth";
import blog from "@/store/blog";
import collapse from "@/store/collapse";
import services from "@/store/services";
import clients from "@/store/clients";
import translations from "@/store/translations";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {},
    mutations: {},
    actions: {},
    modules: {
        auth,
        blog,
        collapse,
        services,
        clients,
        translations
    }
});