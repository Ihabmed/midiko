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
      class="mt-5 rounded-lg"
      v-model:search="search"
      :items="pharmacies"
      :headers="headers"
    >
      <template v-slot:item="{ item }">
        <PharmacieItem :pharmacie="item" :selectable="false"> </PharmacieItem>
      </template>
    </v-data-table>
  </div>
</template>
<script>
import PharmacieItem from "@/components/global/PharmacieItem";
import Title from "@/components/other/Title";
import { mapGetters, mapActions } from "vuex";
export default {
  components: {
    PharmacieItem,
    Title,
  },
  data: () => ({
    search: "",
    headers: [
      { title: "" },
      { title: "nom", key: "nom", sortable: true },
      { title: "localisation", key: "localisation", align: "center", sortable: true },
      { title: "conventions", key: "conventions", align: "center", sortable: false },
      { title: "evaluation", key: "evaluation", align: "center", sortable: true },
      { title: "" },
    ],
  }),
  methods: {
    ...mapActions("pharmacies", ["fetchPharmacies"]),
  },
  computed: {
    ...mapGetters("pharmacies", {
      pharmacies: "getPharmacies",
    }),
  },
  created() {
    this.fetchPharmacies();
  },
};
</script>
<i18n>
  {
    "fr": {
      "titre": "Pharmacies",
      "search": "Rechercher",
      "nom": "Nom",
      "localisation": "Localisation",
      "conventions": "Conventions",
      "evaluation": "Note",
    },
    "ar": {
      "titre": "الصيدليات",
      "search": "بحث",
      "nom": "الاسم",
      "localisation": "الموقع",
      "conventions": "التعاقدات",
      "evaluation": "التقييم",
    }
  }
</i18n>
