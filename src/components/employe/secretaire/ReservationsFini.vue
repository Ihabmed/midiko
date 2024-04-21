<template>
  <div>
    <div class="d-flex justify-space-between align-center">
      <Title :text="$t('reservations-fini')" size="h3"></Title>
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
    <v-data-table
      v-model:search="search"
      :items="reservations"
      :headers="headers"
      class="mt-5 rounded-lg"
    >
      <template v-slot:item="{ item }">
        <ReservationItem :reservation="item" voir> </ReservationItem>
      </template>
    </v-data-table>
  </div>
</template>
<script>
import ReservationItem from "@/components/global/ReservationItem";
import Title from "@/components/other/Title";
import { mapGetters, mapActions } from "vuex";
export default {
  components: {
    Title,
    ReservationItem,
  },
  data: () => ({
    search: "",
    headers: [
      { title: "id", key: "id", align: "left", sortable: true },
      { title: "patient", key: "patient", align: "center", sortable: true },
      { title: "type", key: "type", align: "center", sortable: true },
    ],
  }),
  computed: {
    ...mapGetters("reservations", {
      reservations: "getReservations",
    }),
  },
  methods: {
    ...mapActions("reservations", ["fetchReservations"]),
  },
  created() {
    this.fetchReservations();
  },
};
</script>

<i18n>
{
  "fr": {
    "reservations-fini": "Réservation Finie"
  },
  "ar": {
    "reservations-fini": "الحجوزات المنتهية"
  }
}
</i18n>
