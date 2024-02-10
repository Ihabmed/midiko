import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Accueil",
    component: () =>
      import("../views/AccueilView"),
  },
  {
    path: "/portail-patient",
    name: "Portail Patient",
    component: () =>
      import("../views/PortailPatientView"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
