import Vue from "vue";
import VueRouter from "vue-router";
import FooterComponent from "@/components/Footer.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/footer",
    name: "FooterComponent",
    component: FooterComponent,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
