<template>
  <div>
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
    <v-data-table
      v-model:search="search"
      :items="cliniques"
      :headers="headers"
      class="mt-5 rounded-lg"
    >
      <template v-slot:item="{ item }">
        <ClinicItem :clinique="item" :selectable="false"> </ClinicItem>
      </template>
    </v-data-table>
  </div>
</template>
<script>
import ClinicItem from "@/components/global/ClinicItem";
import Title from "@/components/other/Title";
import { mapGetters, mapActions } from "vuex";
export default {
  components: {
    ClinicItem,
    Title,
  },
  data: () => ({
    search: "",
    headers: [
      { title: "" },
      { title: "nom", key: "nom", sortable: true },
      { title: "localisation", key: "localisation", align: "center", sortable: true },
      { title: "reservations", key: "reservations", align: "center", sortable: true },
      { title: "evaluation", key: "evaluation", align: "center", sortable: true },
      { title: "" },
    ],
  }),
  methods: {
    ...mapActions("cliniques", ["fetchCliniques"]),
  },
  computed: {
    ...mapGetters("cliniques", {
      cliniques: "getCliniques",
    }),
  },
  created() {
    this.fetchCliniques();
  },
};
</script>
<i18n>
  {
    "fr": {
      "titre": "Cliniques",
      "search": "Rechercher",
      "nom": "Nom",
      "localisation": "Localisation",
      "reservations": "Réservation",
      "evaluation": "Note",
    },
    "ar": {
      "titre": "العيادات",
      "search": "بحث",
      "nom": "الاسم",
      "localisation": "الموقع",
      "reservations": "الحجوزات",
      "evaluation": "التقييم",
    }
  }
</i18n>
