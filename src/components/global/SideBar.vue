<template>
  <v-navigation-drawer class="sticky" permanent>
    <v-list class="h-100 pa-0">
      <v-list-item
        v-for="(item, i) in items"
        :key="i"
        :value="i"
        :height="getHeight()"
        :class="item.class"
        :prepend-icon="item.icon"
        :color="item.color"
        :active="activeElement == item.title"
        :base-color="typeof item.baseColor == 'undefined' ? '' : item.baseColor"
        @click="$emit('elementChanged', item.title)"
        :title="$t(type + '.' + item.title)"
      >
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  props: {
    items: Array,
    type: String,
  },
  data: () => ({}),
  computed: {
    ...mapGetters(["activeElement"]),
  },
  methods: {
    getHeight() {
      return (window.innerHeight - 0.11 * window.innerHeight) / this.items.length;
    },
  },
  emits: ["elementChanged"],
};
</script>
<style scoped>
.sticky {
  position: fixed !important;
  top: 11% !important;
}
</style>
<i18n>
  {
    "fr": {
      "patients": {
          "reserver": "Réserver",
          "accueil": "Accueil",
          "reservations": "Mes Réservations",
          "dossier-medical": "Mon Dossier Médical",
          "cliniques": "Cliniques",
          "pharmacies": "Pharmacies",
          "profil": "Mon Profil",
          "parametres": "Paramètres",
          "deconnecter": "Déconnecter"
      },
      "secretaire": {
        "reserver": "Ajouter Réservation",
        "accueil": "Accueil",
        "reservations": "Réservations",
        "reservations-venir": "Réservations à venir",
        "reservations-fini": "Réservations finies",
        "deconnecter": "Déconnecter"
      },
      "docteur": {
        "traiter": "Traiter",
        "accueil": "Accueil",
        "reservations-traiter": "Réservations traiter",
        "deconnecter": "Déconnecter"
      }
    },
    "ar": {
      "patients": {
        "reserver": "حجز",
        "accueil": "الصفحة الرئيسية",
        "reservations": "حجوزاتي",
        "dossier-medical": "سجلي الطبي",
        "cliniques": "العيادات",
        "pharmacies": "الصيدليات",
        "profil": "ملفي الشخصي",
        "parametres": "الإعدادات",
        "deconnecter": "تسجيل الخروج"
      },
      "secretaire": {
        "reserver": "إضافة حجز",
        "accueil": "الصفحة الرئيسية",
        "reservations": "الحجوزات",
        "reservations-venir": "الحجوزات القادمة",
        "reservations-fini": "الحجوزات المنتهية",
        "deconnecter": "تسجيل الخروج"
      },
      "docteur": {
        "traiter": "معالجة",
        "accueil": "الصفحة الرئيسية",
        "reservations-traiter": "الحجوزات المنتهية",
        "deconnecter": "تسجيل الخروج"
      }
    }
  }
</i18n>
