import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import { isLoggedIn } from "../api/utils";
import { checkAdmin } from "../api/utils";

Vue.use(VueRouter);

const routes = [
  {
    path: "/home",
    name: "Home",
    component: Home,
    meta: {
      allowAnonymous: false,
    },
  },
  {
    path: "/about",
    name: "About",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
    meta: {
      allowAnonymous: false,
    },
  },
  {
    path: "/add-user",
    name: "AddUser",
    component: () => import("../views/AddUser.vue"),
    meta: {
      allowAnonymous: true,
    },
  },
  {
    path: "/add-client",
    name: "AddClient",
    component: () => import("../views/AddClient.vue"),
    meta: {
      allowAnonymous: false,
      allowNoAdmin: false,
    },
  },
  {
    path: "/",
    name: "Login",
    component: () => import("../views/Login.vue"),
    meta: {
      allowAnonymous: true,
    },
  },
  {
    path: "/market",
    name: "Market",
    component: () => import("../views/Market.vue"),
  },
  {
    path: "*",
    name: "Error",
    component: () => import("../views/Error.vue"),
  },
];

const router = new VueRouter({
  routes,
});

// COMPROBANDO CADA PÁGINA POR SI LA PERSONA ESTÁ LOGUEADA //
router.beforeEach((to, from, next) => {
  // SI LA RUTA ES PRIVADA Y LA PERSONA NO TIENE TOKEN //
  if (!to.meta.allowAnonymous && !isLoggedIn()) {
    next({
      path: "/",
      query: { redirect: to.fullPath },
    });
  }
  if (to.meta.allowNoAdmin === false && !checkAdmin()) {
    next({
      path: "/home",
      query: { redirect: to.fullPath },
    });
  } else {
    next();
  }
});

export default router;
