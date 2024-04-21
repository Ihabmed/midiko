<template>
  <div class="pe-5">
    <div class="d-flex justify-space-between align-center">
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
    <v-timeline align="start" side="end" class="mt-5">
      <v-timeline-item v-for="(rdv, i) in rdvs" :key="i" :dot-color="getColor(rdv)">
        <div class="d-flex justify-space-between">
          <div class="pe-3">
            <div class="d-flex justify-space-between">
              <div>
                <span :class="`text-h5 font-weight-bold mb-4 text-${getColor(rdv)}`">
                  {{ $t(rdv.type) + " " }}
                </span>
                <span
                  style="opacity: 0.5"
                  :class="`text-h5 font-weight-bold mb-4 text-${getColor(rdv)}`"
                >
                  {{ $t(getStatus(rdv)) }}
                </span>
              </div>
              <LinkBtn
                v-if="!rdv.done"
                :text="$t('plus')"
                @click="showDetails(i + 1)"
              ></LinkBtn>
            </div>

            <p class="text-body-1">
              <span class="font-weight-bold">{{ $t("clinicName") }} :</span>
              {{ rdv.clinicName }}
            </p>
            <p class="text-body-1">
              <span class="font-weight-bold">{{ $t("reason") }} :</span>
              {{ rdv.reason }}
            </p>
            <p class="text-body-1">
              <span class="font-weight-bold">{{ $t("desc") }} :</span>
              {{ rdv.desc }}
            </p>
          </div>
          <div>
            <v-img
              height="200px"
              width="200px"
              class="rounded-lg"
              :src="`https://cdn.vuetifyjs.com/docs/images/graphics/gpus/${rdv.clinicLogo}`"
            ></v-img>
          </div>
        </div>
        <template v-slot:opposite>
          <div
            :class="`pt-1 headline font-weight-bold text-${getColor(rdv)}`"
            v-text="rdv.date"
          ></div>
        </template>
      </v-timeline-item>
    </v-timeline>
  </div>
</template>
<script>
import { mapActions } from "vuex";
import Title from "@/components/other/Title";
export default {
  components: {
    Title,
  },
  data: () => ({
    search: "",
    rdvs: [
      {
        date: "12 Jan 2022 10:00 PM",
        type: "consultation",
        clinicName: "Clinique Al Hayat",
        clinicLogo: "1.png",
        reason: "Fievre",
        done: true,
        desc:
          "Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus, vix an salutandi sententiae.",
      },
      {
        date: "12 Jan 2022 10:00 PM",
        type: "examen",
        clinicName: "Al Badr",
        clinicLogo: "2.png",
        reason: "Fievre",
        done: true,
        desc:
          "Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus, vix an salutandi sententiae.",
      },
      {
        date: "12 Jan 2022 10:00 PM",
        type: "consultation",
        clinicName: "Al Badr",
        clinicLogo: "3.png",
        reason: "Fievre",
        done: false,
        desc:
          "Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus, vix an salutandi sententiae.",
      },
      {
        date: "12 Jan 2022 10:00 PM",
        type: "rdv",
        clinicName: "Al yusr",
        clinicLogo: "4.png",
        reason: "Fievre",
        done: false,
        desc:
          "Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus, vix an salutandi sententiae.",
      },
      {
        date: "12 Jan 2022 10:00 PM",
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
  methods: {
    getColor(rdv) {
      return rdv.done ? "primary" : "secondary";
    },
    getStatus(rdv) {
      return rdv.done ? "upcomming" : "done";
    },
    ...mapActions(["updateActiveElement"]),
    showDetails(rdvId) {
      this.updateActiveElement("dossier-medical");
      this.$router.push({
        path: "/patients/dashboard/dossier-medical/",
        params: { id: rdvId },
      });
      console.log(
        "this is printed from clicing at the 'voir les details button in reservation page ( rdv ID : " +
          rdvId +
          " )"
      );
    },
  },
};
</script>
<i18n>
  {
    "fr": {
      "titre": "Mes Réservations",

      "consultation": "Consultation",
      "examen": "Examen",
      "rdv": "Rendez-vous",

      "upcomming": "(à venir)",
      "done": "(fini)",

      "clinicName": "Nom de clinique",
      "reason": "Raison de réservation",
      "desc": "Description",
      "plus": "Voir les details",
      "search": "Chercher"
    },
    "ar": {
      "titre": "حجوزاتي",

      "consultation": "استشارة طبية",
      "examen": "تحاليل",
      "rdv": "موعد",

      "upcomming": "(قادمة)",
      "done": "(مكتملة)",

      "clinicName": "اسم العيادة",
      "reason": "سبب الحجز",
      "desc": "وصف",
      "plus": "عرض التفاصيل",
      "search": "بحث"
    }
  }
</i18n>
