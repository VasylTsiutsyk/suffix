import Vue from "vue";
import VueRouter from "vue-router";
import store from "@/store";
/**
 * -----------
 * Route views
 * -----------
 */
import Home from "@/views/Home.vue";
import loginRoute from "@/views/login.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/login",
    name: "login",
    component: loginRoute,
    meta: { notProtected: true }
  },
  {
    path: "/articles",
    name: "articles",
    component: () => import("@/views/Articles.vue")
  },
  {
    path: "/blog",
    name: "blog",
    component: () => import("@/views/Blog.vue")
  },
  {
    path: "/blog/:slug",
    name: "blogitem",
    component: () => import("@/views/blog-item.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

router.beforeEach(async (to, from, next) => {
  if (
    to.matched.some(record => record.meta.notProtected) ||
    store.getters["auth/isLogin"]
  ) {
    return next();
  }

  store.dispatch("auth/login").then(
    () => {
      next();
    },
    () => {
      next("/login");
    }
  );
});

export default router;
