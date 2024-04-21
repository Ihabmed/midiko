<template>
  <div>
    <Title :text="$t('titre')" size="h3" class="mb-5"></Title>
    <v-form>
      <v-text-field
        v-for="input in inputs"
        :key="input.label"
        :label="$t(input.label)"
        variant="outlined"
      />
      <div class="d-flex justify-end">
        <PrimaryBtn
          :text="$t('ajouter')"
          :loading="loading"
          @click="reserver()"
        ></PrimaryBtn>
      </div>
      <SnackBar ref="snackBar" />
    </v-form>
  </div>
</template>
<script>
import Title from "@/components/other/Title";
import SnackBar from "@/components/other/SnackBar";
export default {
  components: {
    Title,
    SnackBar,
  },
  data: () => ({
    loading: false,
    disabled: false,
    search: "",
    headers: [
      { title: "" },
      { title: "nom", key: "nom", sortable: true },
      { title: "localisation", key: "localisation", align: "center", sortable: true },
      { title: "reservations", key: "reservations", align: "center", sortable: true },
      { title: "evaluation", key: "evaluation", align: "center", sortable: true },
      { title: "" },
    ],
    inputs: [
      {
        label: "nom",
        type: "text",
      },
      {
        label: "prenom",
        type: "text",
      },
      {
        label: "nin",
        type: "number",
      },
      {
        label: "type",
        type: "text",
      },
    ],
  }),
  methods: {
    reserver() {
      this.loading = true;
      this.disabled = true;
      setTimeout(() => {
        this.$refs.snackBar.show("employeReserved", "success");
        this.loading = false;
        this.disabled = false;
      }, 2000);
    },
  },
};
</script>
<i18n>
  {
    "fr": {
      "titre": "Ajouter une Réservation",
      "nom": "Nom",
      "prenom": "Prenom",
      "ajouter": "Ajouter",
      "nin": "Numero d'identification nationale (NIN)",
      "type": "Type de reservation",
    },
    "ar": {
      "titre": "إضافة حجز",
      "nom": "الاسم",
      "prenom": "اللقب",
      "ajouter": "اضافة",
      "nin": "رقم الهوية الوطنية (NIN)",
      "type": "نوع الحجز",
    }
  }
</i18n>
