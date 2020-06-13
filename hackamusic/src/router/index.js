import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Error from "../views/Error.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: () => import("../views/About.vue"),
  },
  {
    path: "/top-tracks",
    name: "TopTracks",
    component: () => import("../views/TopTracks.vue"),
  },
  {
    path: "/top-artists",
    name: "TopArtists",
    component: () => import("../views/TopArtists.vue"),
  },
  ,
  // Path que nos recoge cualquier página que no tengamos especificada //
  {
    path: "*",
    name: "Error",
    component: Error,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
