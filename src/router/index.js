import Vue from "vue";
import VueRouter from "vue-router";
import store from "@/store";
import { preloader } from "@/plugins/preloader";

import Home from "@/views/home.vue";
import { getGlobalData } from "../plugins/globalData";

Vue.use(VueRouter);

const routes = [{
        path: "/",
        name: "home",
        component: Home
    },
    {
        path: "/articles",
        name: "articles",
        component: () =>
            import ("@/views/articles.vue")
    },

    {
        path: "/articles/:slug",
        name: "articles-item",
        component: () =>
            import ("@/views/articles-item.vue")
    },
    {
        path: "/404",
        name: "404",
        component: () =>
            import ("@/views/error-404.vue")
    },
    {
        path: "*",
        redirect: "/404"
    }
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes
});

router.beforeEach(async(to, from, next) => {
    await preloader.showWithDelay(500);

    if (
        to.matched.some(record => record.meta.notProtected) ||
        store.getters["auth/isLogin"]
    ) {
        preloader.hideWithDelay(400);
        return next();
    }
    await getGlobalData();

    store.dispatch("auth/login").then(
        () => {
            preloader.hide();
            next();
        },
        () => {
            preloader.hide();
            next("/login");
        }
    );
});

export default router;