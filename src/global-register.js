import Vue from "vue";

/**
 * -------------------------------
 * Components
 * -------------------------------
 */
import Header from "@/chunks/header/header";
Vue.component("suffix-header", Header);
import Footer from "@/chunks/footer/footer";
Vue.component("suffix-footer", Footer);
import BanerArticle from "@/chunks/baner-article/baner-article";
Vue.component("BanerArticle", BanerArticle);
import Collapse from "@/chunks/app/collapse/collapse";
Vue.component("Collapse", Collapse);
import Loader from "@/chunks/app/loader/loader";
Vue.component("Loader", Loader);

/**
 * -------------------------------
 * Mixins
 * -------------------------------
 */
import { mixin } from "@/global-mixin";
Vue.mixin(mixin);

/**
 * -------------------------------
 * Filters
 * -------------------------------
 */
import moment from "moment";
Vue.filter("formatDate", function(value) {
    if (value) {
        return moment(String(value)).format("MM/DD/YYYY");
    }
});