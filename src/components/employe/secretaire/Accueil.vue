<template>
  <div>
    <div>
      <Title :text="$t('acceuil')" size="h3"></Title>
    </div>
    <v-row>
      <v-col class="my-3">
        <p class="text-h5 my-2">
          {{ $t("employe") }} : <span class="font-weight-bold">Yassine Nadi</span>
        </p>
        <p class="text-h5 my-2">
          {{ $t("position") }} : <span class="font-weight-bold">Secrétaire</span>
        </p>
        <p class="text-h5 my-2">
          {{ $t("clinique") }} : <span class="font-weight-bold">AL Shifaa</span>
        </p>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <StatCard
          title="reservations-venir"
          number="1"
          icon="mdi-calendar-range"
          bgColor="gradient-bg"
          textColor="white"
        />
      </v-col>
      <v-col>
        <StatCard
          title="reservations-fini"
          number="7"
          icon="mdi-calendar-range"
          numberColor="primary"
        />
      </v-col>
    </v-row>
  </div>
</template>
<script>
import StatCard from "@/components/global/StatCard";
import Title from "@/components/other/Title";
export default {
  components: {
    StatCard,
    Title,
  },
  data: () => ({
    search: "",
  }),
};
</script>
<i18n>
  {
    "fr": {
      "bienvenu": "Bienvenu",
      "acceuil": "Accueil",
      "secretaire": "Secrétaire de réception",
      "employe": "Employé",
      "position": "Position",
      "clinique": "Clinique",
      "ouverte": "Clinique ouverte"
    },
    "ar": {
      "bienvenu": "مرحبا بعودتك",
      "acceuil": "الرئيسية",
      "secretaire": "عميل استقبال",
      "employe": "الموظف",
      "position": "المنصب",
      "clinique": "العيادة",
      "ouverte": "العيادة مفتوحة"
    }
  }
</i18n>
