import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const Accordion = () => import("../views/Accordion.vue");
const routes = [
  {
    path: "/",
    name: "Accordion",
    component: Accordion
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
