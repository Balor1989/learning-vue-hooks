import { createRouter, createWebHistory } from "vue-router";
import ChangePage from "./views/ChangePage";
import HomePage from "./views/HomePage";

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: HomePage,
    },
    { path: "/change", component: ChangePage },
  ],
  linkActiveClass: "active",
  linkExactActiveClass: "active",
});
