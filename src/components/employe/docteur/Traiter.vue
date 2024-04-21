<template>
  <div class="h-100">
    <div class="d-flex justify-space-between align-center">
      <Title :text="$t('titre')" size="h3"></Title>
      <div>
        <v-btn
          class="text-capitalize rounded-pill ms-3 gradient-bg text-white"
          elevation="0"
          :text="$t('terminer')"
          append-icon="mdi-check"
        >
        </v-btn>
      </div>
    </div>
    <v-row class="row mt-2">
      <v-col cols="5" class="h-100">
        <v-card class="rounded-lg pa-5 h-100" position="relative" elevation="6">
          <v-card-title>{{ $t("patient") }} </v-card-title>

          <v-list>
            <v-list-item>
              <v-list-item-subtitle>{{ $t("nom") }}</v-list-item-subtitle>

              <v-list-item-title>
                Yassine Nadi
                <!-- {{ patient.nom }} --></v-list-item-title
              >
            </v-list-item>
            <v-list-item>
              <v-list-item-subtitle>{{ $t("localisation") }}</v-list-item-subtitle>

              <v-list-item-title
                >Tissemsilet - Bordj bounaama
                <!-- {{ patient.localisation }} --></v-list-item-title
              >
            </v-list-item>
            <v-list-item>
              <v-list-item-subtitle>{{ $t("nin") }}</v-list-item-subtitle>

              <v-list-item-title>2873918239123791283</v-list-item-title>
            </v-list-item>
          </v-list>
          <div class="w-100 actions pa-2 d-flex justify-end">
            <v-btn
              class="text-capitalize rounded-md"
              elevation="0"
              :text="$t('voir-dossier')"
              variant="tonal"
              to="/employe/docteur/dashboard/dossier-medical"
            >
            </v-btn>
          </div>
        </v-card>
      </v-col>
      <v-col class="h-100">
        <v-card class="rounded-lg pa-5 h-100" position="relative" elevation="6">
          <v-card-title>{{ $t("reservation") }} </v-card-title>

          <v-list>
            <v-list-item>
              <v-list-item-subtitle>{{ $t("type") }}</v-list-item-subtitle>

              <v-list-item-title>
                Consultation
                <!-- {{ reservation.type }} --></v-list-item-title
              >
            </v-list-item>
            <v-list-item>
              <v-list-item-subtitle>{{ $t("reason") }}</v-list-item-subtitle>

              <v-list-item-title
                >Fievre
                <!-- {{ reservation.reason }} --></v-list-item-title
              >
            </v-list-item>
            <v-list-item>
              <v-list-item-subtitle>{{ $t("classment") }}</v-list-item-subtitle>
              <v-list-item-title
                >15
                <!-- {{ reservation.classment }} --></v-list-item-title
              >
            </v-list-item>
          </v-list>
          <div class="w-100 actions pa-2 d-flex justify-end">
            <v-btn
              class="text-capitalize rounded-md ms-2"
              elevation="0"
              :text="$t('ordonnance')"
              @click="ordonnanceVisible = true"
              variant="tonal"
            >
            </v-btn>
            <v-btn
              class="text-capitalize rounded-md ms-2"
              elevation="0"
              :text="$t('rapport')"
              variant="tonal"
              @click="rapportVisible = true"
            >
            </v-btn>
            <v-btn
              class="text-capitalize rounded-md ms-2"
              elevation="0"
              :text="$t('examen')"
              variant="tonal"
              @click="examenVisible = true"
            >
            </v-btn>
          </div>
        </v-card>
      </v-col>
    </v-row>
    <Ordonnance
      :visible="ordonnanceVisible"
      @close="ordonnanceVisible = false"
    ></Ordonnance>
    <Rapport :visible="rapportVisible" @close="rapportVisible = false"></Rapport>
    <Examen :visible="examenVisible" @close="examenVisible = false"></Examen>
  </div>
</template>
<script>
import Title from "@/components/other/Title";
import Ordonnance from "@/components/employe/docteur/traiter/Ordonnance";
import Rapport from "@/components/employe/docteur/traiter/Rapport";
import Examen from "@/components/employe/docteur/traiter/Examen";
export default {
  components: {
    Title,
    Ordonnance,
    Rapport,
    Examen,
  },
  data: () => ({
    ordonnanceVisible: false,
    rapportVisible: false,
    examenVisible: false,
  }),
};
</script>
<style>
.row {
  height: 90%;
}
.actions {
  position: absolute;
  bottom: 0px;
  right: 0px;
}
</style>
<i18n>
  {
    "fr": {
      "titre": "Traiter la réservation",
      "patient": "Patient",
      "nom": "Nom",
      "localisation": "Localisation",
      "nin": "Numéro d'identité nationnelle (NIN)",
      "reservation": "Reservation",
      "type": "Type",
      "reason": "Raison",
      "classment": "Classement",
      "terminer": "Terminer",
      "voir-dossier": "Voir dossier médical",
      "ordonnance": "Ordonnance",
      "rapport": "Rapport",
      "examen": "Examen",
    },
    "ar": {
      "titre": "معالجة الحجز",
      "patient": "المريض",
      "nom": "الاسم",
      "localisation": "الموقع",
      "nin": "رقم الهوية الوطنية (NIN)",
      "reservation": "الحجز",
      "type": "النوع",
      "reason": "السبب",
      "classment": "التصنيف",
      "terminer": "انهاء",
      "voir-dossier": "عرض الملف الطبي",
      "ordonnance": "وصفة",
      "rapport": "تقرير",
      "examen": "اختبار",
      "medsList": "قائمة الأدوية",
      "apercu": "استعراض الوصفة",
      "print": "طباعة"
    }
  }
</i18n>
