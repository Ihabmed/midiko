<template>
  <div class="h-100">
    <div class="d-flex justify-space-between align-center w-100">
      <Title :text="$t('titre')" size="h3"></Title>
      <div class="w-50">
        <v-text-field
          variant="outlined"
          v-model="search"
          :label="$t('search')"
          clearable
          prepend-inner-icon="mdi-magnify"
          single-line
          hide-details
        ></v-text-field>
      </div>
    </div>
    <v-container>
      <v-row>
        <v-col> </v-col>
        <v-col> </v-col>
      </v-row>
    </v-container>
    <v-timeline align="start" side="end">
      <v-timeline-item v-for="(rdv, i) in rdvs" :key="i" :id="i" class="w-100">
        <div>{{ $t(rdv.type) }}</div>
        <template v-slot:opposite>
          <div class="pt-1 font-weight-bold" v-text="rdv.date"></div>
        </template>
      </v-timeline-item>
    </v-timeline>
  </div>
</template>
<script>
import Title from "@/components/other/Title";
export default {
  components: {
    Title,
  },
  data: () => ({
    panel: [],
    search: "",
    rdvs: [
      {
        date: "12 Feb 2023",
        type: "consultation",
        clinicName: "Clinique Al Hayat",
        clinicLogo: "1.png",
        reason: "Fievre",
        done: true,
        desc:
          "Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus, vix an salutandi sententiae.",
      },
      {
        date: "12 Feb 2023",
        type: "examen",
        clinicName: "Al Badr",
        clinicLogo: "2.png",
        reason: "Fievre",
        done: true,
        desc:
          "Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus, vix an salutandi sententiae.",
      },
      {
        date: "12 Feb 2023",
        type: "consultation",
        clinicName: "Al Badr",
        clinicLogo: "3.png",
        reason: "Fievre",
        done: false,
        desc:
          "Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus, vix an salutandi sententiae.",
      },
      {
        date: "12 Feb 2023",
        type: "examen",
        clinicName: "Al Badr",
        clinicLogo: "2.png",
        reason: "Fievre",
        done: true,
        desc:
          "Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus, vix an salutandi sententiae.",
      },
      {
        date: "12 Feb 2023",
        type: "consultation",
        clinicName: "Al Badr",
        clinicLogo: "3.png",
        reason: "Fievre",
        done: false,
        desc:
          "Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus, vix an salutandi sententiae.",
      },
      {
        date: "12 Feb 2023",
        type: "rdv",
        clinicName: "Al yusr",
        clinicLogo: "4.png",
        reason: "Fievre",
        done: false,
        desc:
          "Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus, vix an salutandi sententiae.",
      },
      {
        date: "12 Feb 2023",
        type: "consultation",
        clinicName: "Al chifaa",
        clinicLogo: "5.png",
        reason: "Fievre",
        done: false,
        desc:
          "Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus, vix an salutandi sententiae.",
      },
    ],
  }),
};
</script>
<i18n>
  {
    "fr": {
      "titre": "Mon dossier médical",
      "clinicName": "Nom de clinique",
      "reason": "Raison de réservation",
      "desc": "Description",

      "consultation": "Consultation",
      "examen": "Examen",
      "rdv": "Rendez-vous",
      "search": "Chercher"
    },
    "ar": {
      "titre": "ملفي الطبي",
      "clinicName": "اسم العيادة",
      "reason": "سبب الحجز",
      "desc": "وصف",

      "consultation": "استشارة طبية",
      "examen": "تحاليل",
      "rdv": "موعد",
      "search": "بحث"
    }
  }
</i18n>
