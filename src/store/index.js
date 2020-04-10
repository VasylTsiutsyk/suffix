import Vue from "vue";
import Vuex from "vuex";
/**
 * -------
 * Modules
 * -------
 */
import auth from "@/store/auth";
import blog from "@/store/blog";
import translations from "@/store/translations";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {},
    mutations: {},
    actions: {},
    modules: {
        auth,
        blog,
        translations
    }
});