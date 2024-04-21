<template>
  <div>
    <div class="d-flex justify-space-between align-center w-100">
      <Title :text="$t('acceuil')" size="h3"></Title>
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
    <v-row>
      <v-col>
        <Title :text="$t('bienvenu') + ' Yassine Nadi !!'" class="my-3" size="h6"></Title>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <StatCard
          title="rendez"
          number="1"
          icon="mdi-calendar-range"
          bgColor="gradient-bg"
          textColor="white"
        />
      </v-col>
      <v-col>
        <StatCard title="pharms" number="7" icon="mdi-store" numberColor="primary" />
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <StatCard
          title="clinics"
          number="5"
          icon="mdi-hospital-building"
          numberColor="primary"
        />
      </v-col>
      <v-col>
        <StatCard
          title="clinics"
          number="5"
          icon="mdi-hospital-building"
          numberColor="primary"
        />
      </v-col>
      <v-col>
        <StatCard
          title="clinics"
          number="5"
          icon="mdi-hospital-building"
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
      "search": "Rechercher ( Clinique, Pharmacie, Medecin, ...)"
    },
    "ar": {
      "bienvenu": "مرحبا بعودتك",
      "acceuil": "الرئيسية",
      "search": "بحث عن عيادة, صيدلية, طبيب, ..."
    }
  }
</i18n>
