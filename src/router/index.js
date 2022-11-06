import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView.vue";
import DigitalDivide from "../views/DigitalDivide.vue";
import GetInvolved from "../views/GetInvolved.vue";
import OurNetwork from "../views/OurNetwork.vue";
import InsightsView from "../views/InsightsView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    component: AboutView,
  },
  {
    path: "/digitaldivide",
    name: "digitaldivide",
    component: DigitalDivide,
  },
  {
    path: "/getinvolved",
    name: "getinvolved",
    component: GetInvolved,
  },
  {
    path: "/ournetwork",
    name: "ournetwork",
    component: OurNetwork,
  },
  {
    path: "/insights",
    name: "insights",
    component: InsightsView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
