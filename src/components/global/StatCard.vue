<template>
  <v-card
    :class="`rounded-lg pe-3 pb-3 ${bgColor} cursor-pointer text-${textColor}`"
    elevation="4"
  >
    <v-card-title>{{ $t(title) }}</v-card-title>
    <div class="d-flex justify-space-between align-center">
      <v-card-text :class="`text-h1 font-weight-black text-${numberColor}`">{{
        number
      }}</v-card-text>
      <v-icon size="90">{{ icon }}</v-icon>
    </div>
  </v-card>
</template>
<script>
export default {
  props: {
    title: String,
    number: String,
    icon: String,
    textColor: String,
    numberColor: String,
    bgColor: String,
  },
};
</script>
<i18n>
  {
    "fr": {
      "rendez": "Rendez-vous à venir",
      "reservations-venir": "Réservations à venir",
      "reservations-fini": "Réservations finies",
      "pharms": "Pharmacies à proximité",
      "clinics": "Cliniques à proximité"
    },
    "ar": {
      "rendez": "المواعيد المحجوزة",
      "reservations-venir": "الحجوزات المتاحة",
      "reservations-fini": "الحجوزات المنتهية",
      "pharms": "الصيدليات القريبة",
      "clinics": "العيادات القريبة"
    }
  }
</i18n>
