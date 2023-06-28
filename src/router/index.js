import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  base: import.meta.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("../pages/Store.vue"),
    },
    {
      path: "*",
      name: "404",
      component: () => import("../pages/Custom404.vue"),
    },
  ],
});

export default router;
