import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    component: () => import("../views/AccueilView"),
  },
  {
    path: "/patients",
    component: () => import("../views/PatientsView"),
    children: [
      {
        path: "auth",
        component: () => import("../views/patients/AuthView"),
      },
      {
        path: "dashboard",
        component: () => import("../views/patients/DashboardView"),
        children: [
          {
            path: "reserver",
            component: () => import("@/components/patients/Reserver"),
          },
          {
            path: "accueil",
            component: () => import("@/components/patients/Accueil"),
          },
          {
            path: "Reservations",
            component: () => import("@/components/patients/Reservations"),
          },
          {
            path: "dossier-medical",
            component: () => import("@/components/patients/DossierMedical"),
          },
          {
            path: "Cliniques",
            component: () => import("@/components/patients/Cliniques"),
          },
          {
            path: "Cliniques/:id",
            component: () => import("@/components/patients/Clinique"),
          },
          {
            path: "pharmacies",
            component: () => import("@/components/patients/Pharmacies"),
          },
          {
            path: "pharmacies/:id",
            component: () => import("@/components/patients/Pharmacie"),
          },
          {
            path: "Profil",
            component: () => import("@/components/patients/Profil"),
          },
          {
            path: "Parametres",
            component: () => import("@/components/patients/Parametres"),
          },
        ],
      },
    ],
  },
  {
    path: "/cliniques",
    component: () => import("../views/CliniquesView"),
    children: [
      {
        path: "auth",
        component: () => import("../views/cliniques/AuthView"),
      },
      {
        path: "dashboard",
        component: () => import("../views/cliniques/DashboardView"),
      },
    ],
  },
  {
    path: "/employe",
    component: () => import("../views/EmployeView"),
    children: [
      {
        path: "auth",
        component: () => import("../views/employe/AuthView"),
      },
      {
        path: "secretaire/dashboard",
        component: () => import("../views/employe/secretaire/DashboardView"),
        children: [
          {
            path: "reserver",
            component: () => import("@/components/employe/secretaire/Reserver"),
          },
          {
            path: "accueil",
            component: () => import("@/components/employe/secretaire/Accueil"),
          },
          {
            path: "Reservations",
            component: () => import("@/components/employe/secretaire/Reservations"),
          },
          {
            path: "Reservations-venir",
            component: () =>
              import("@/components/employe/secretaire/ReservationsVenir"),
          },
          {
            path: "Reservations-venir/:id",
            component: () => import("@/components/employe/secretaire/Reservation"),
          },
          {
            path: "Reservations-fini",
            component: () =>
              import("@/components/employe/secretaire/ReservationsFini"),
          },
        ],
      },
      {
        path: "docteur/dashboard",
        component: () => import("../views/employe/docteur/DashboardView"),
        children: [
          {
            path: "accueil",
            component: () => import("@/components/employe/docteur/Accueil"),
          },
          {
            path: "traiter/:id?",
            component: () => import("@/components/employe/docteur/Traiter"),
            props: true
          },
          {
            path: "dossier-medical",
            component: () =>
              import("@/components/employe/docteur/DossierMedical"),
          },
          {
            path: "reservations-traiter",
            component: () =>
              import("@/components/employe/docteur/ReservationsTraiter"),
          }
        ],
      }
    ],
  },
  {
    path: "/:catchAll(.*)",
    component: () => import("../views/404"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
