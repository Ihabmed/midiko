<template>
  <div class="h-100">
    <div class="d-flex justify-space-between align-center">
      <Title :text="$t('reservation')" size="h3"></Title>
      <div>
        <v-btn
          class="text-capitalize rounded-pill ms-3 gradient-bg text-white"
          rounded
          elevation="0"
          :text="$t('accepter')"
        >
        </v-btn>
        <v-btn
          class="text-capitalize rounded-pill ms-3"
          elevation="0"
          rounded
          color="error"
          :text="$t('refuser')"
        >
        </v-btn>
        <v-btn
          class="text-capitalize rounded-pill ms-3"
          color="warning"
          elevation="0"
          rounded
          :text="$t('urgence')"
        >
        </v-btn>
      </div>
    </div>
    <v-row class="row mt-2">
      <v-col cols="5" class="h-100">
        <v-card class="rounded-lg pa-5 h-100" elevation="6">
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
        </v-card>
      </v-col>
      <v-col class="h-100">
        <v-card class="rounded-lg pa-5 h-100" elevation="6">
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
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>
<script>
import Title from "@/components/other/Title";
export default {
  components: {
    Title,
  },
};
</script>
<style>
.row {
  height: 90%;
}
</style>
<i18n>
  {
    "fr": {
      "patient": "Patient",
      "nom": "Nom",
      "localisation": "Localisation",
      "nin": "Numéro d'identité nationnelle (NIN)",
      "reservation": "Reservation",
      "type": "Type",
      "reason": "Raison",
      "classment": "Classement",
      "accpter": "Accepter",
      "refuser": "Refuser",
      "urgence": "Urgence"
    },
    "ar": {
      "patient": "المريض",
      "nom": "الاسم",
      "localisation": "الموقع",
      "nin": "رقم الهوية الوطنية (NIN)",
      "reservation": "الحجز",
      "type": "النوع",
      "reason": "السبب",
      "classment": "التصنيف",
      "accpter": "قبول",
      "refuser": "رفض",
      "urgence": "حالة طارئة"
    }
  }
</i18n>
