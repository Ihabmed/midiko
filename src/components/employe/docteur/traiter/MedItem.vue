<template>
  <v-card variant="tonal" class="pa-5">
    <v-row>
      <v-col>
        <v-combobox
          v-model="med.nom"
          :label="$t('nom')"
          :items="meds"
          variant="outlined"
          clearable
          auto-select-first
          hide-details
        ></v-combobox>
      </v-col>
      <v-col cols="4">
        <v-combobox
          v-model="med.dose"
          :label="$t('dose')"
          :items="doses"
          variant="outlined"
          :suffix="$t('mg')"
          hide-details
          clearable
        ></v-combobox>
      </v-col>

      <v-col cols="1" class="d-flex align-center">
        <v-btn
          v-if="!med.added"
          elevation="0"
          icon="mdi-check"
          class="gradient-bg"
          :disabled="med.nom == null"
          @click="add()"
        >
        </v-btn>
        <v-btn
          v-if="med.added"
          elevation="0"
          icon="mdi-minus"
          color="error"
          @click="this.$emit('removed', index)"
        >
        </v-btn>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-combobox
          v-model="med.frequence"
          :label="$t('frequence')"
          :items="frequences"
          variant="outlined"
          :suffix="$t('foisJour')"
          hide-details
        ></v-combobox>
      </v-col>
      <v-col>
        <v-combobox
          v-model="med.duration"
          :label="$t('duration')"
          :items="durations"
          variant="outlined"
          :suffix="$t('jours')"
          hide-details
        ></v-combobox>
      </v-col>
      <v-col>
        <v-combobox
          v-model="med.voie"
          :label="$t('voie')"
          :items="voies"
          variant="outlined"
          hide-details
        ></v-combobox>
      </v-col>
      <v-col cols="1"> </v-col>
    </v-row>
  </v-card>
</template>
<script>
export default {
  props: {
    med: {
      type: Object,
      required: true,
    },
    index: {
      type: Number,
      required: true,
    },
  },
  data: () => ({
    meds: ["Paracetamol", "Aspirin", "Dolo 650", "codeine", "metformin", "ibuprofen"],
    doses: ["50", "100", "200", "300", "400", "600", "800", "1000", "1200", "1500"],
    frequences: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
    durations: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
    voies: ["bouche", "mouche", "goute"],
  }),
  methods: {
    add() {
      this.$emit("added", this.index);
    },
  },
};
</script>
<i18n>
  {
    "fr": {
      "nom": "Nom de médicament",
      "dose": "Dose",
      "frequence": "Fréquence",
      "mg": "mg",
      "foisJour": "fois/jour",
      "duration": "Durée de traitement",
      "jours": "Jours",
      "voie": "Voie"
    },
    "ar": {
      "nom": "إسم الدواء",
      "dose": "الجرعة",
      "frequence": "التكرار",
      "mg": "مغ",
      "foisJour": "مرة/يوم",
      "duration": "مدة العلاج",
      "jours": "يوم",
      "voie": "الطريقة"
    }
  }
</i18n>
