<template>
  <v-card variant="tonal" class="pa-5">
    <v-row>
      <v-col>
        <v-combobox
          v-model="examen.type"
          :label="$t('type')"
          :items="types"
          variant="outlined"
          clearable
          auto-select-first
          hide-details
        ></v-combobox>
      </v-col>
      <v-col cols="1" class="d-flex align-center">
        <v-btn
          v-if="!examen.added"
          elevation="0"
          icon="mdi-check"
          class="gradient-bg"
          :disabled="examen.type == null"
          @click="add()"
        >
        </v-btn>
        <v-btn
          v-if="examen.added"
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
        <v-text-field
          v-model="examen.reason"
          :label="$t('reason')"
          variant="outlined"
          clearable
        ></v-text-field>
      </v-col>
      <v-col>
        <v-text-field
          v-model="examen.but"
          :label="$t('but')"
          variant="outlined"
          clearable
        ></v-text-field>
      </v-col>
      <v-col cols="1"> </v-col>
    </v-row>
  </v-card>
</template>
<script>
export default {
  props: {
    examen: {
      type: Object,
      required: true,
    },
    index: {
      type: Number,
      required: true,
    },
  },
  data: () => ({
    types: ["Paracetamol", "Aspirin", "Dolo 650", "codeine", "metformin", "ibuprofen"],
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
      "type": "نوع الإختبار",
      "reason": "Raison",
      "but": "But",
    },
    "ar": {
      "type": "نوع الإختبار",
      "reason": "سبب",
      "but": "وصف",
    }
  }
</i18n>
