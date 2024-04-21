<template>
  <tr class="pharmacie">
    <td>
      <v-img
        :src="pharmacie.logo"
        height="120px"
        width="120px"
        class="my-2 rounded"
        cover
      ></v-img>
    </td>
    <td class="font-weight-bold text-subtitle-1 text-capitalize">
      {{ pharmacie.nom }}
    </td>
    <td class="text-subtitle-2 text-capitalize text-center">
      {{ pharmacie.localisation }}
    </td>
    <td class="text-subtitle-2 text-capitalize text-center">
      {{ pharmacie.conventions }}
    </td>
    <td class="text-center">
      <v-rating
        :model-value="pharmacie.evaluation"
        color="orange-darken-2"
        density="compact"
        size="small"
        readonly
      ></v-rating>
    </td>
    <td class="text-right text-subtitle-2 text-capitalize">
      <v-btn
        v-if="selectable"
        :class="{ 'gradient-bg text-white': selected }"
        class="text-capitalize"
        rounded
        variant="tonal"
        @click="this.$emit('select', this.pharmacie)"
        >{{ selected ? $t("Selected") : $t("Select") }}</v-btn
      >
      <v-btn
        v-if="!selectable"
        class="text-capitalize"
        rounded
        variant="tonal"
        @click="this.$router.push('/patients/dashboard/pharmacies/' + this.pharmacie.id)"
        append-icon="mdi-arrow-right-thick"
        >{{ $t("view") }}</v-btn
      >
    </td>
  </tr>
</template>

<script>
export default {
  props: {
    pharmacie: Object,
    selectable: Boolean,
    selected: Boolean,
  },
  emits: ["select"],
};
</script>
<style scoped>
.pharmacie {
  border: 2px solid #000;
  border-radius: 10px;
}
</style>
<i18n>
  {
    "fr": {
      "Selected": "Disélectionner",
      "Select": "Sélectionner",
      "view": "détails"
    },
    "ar": {
      "Selected": "محدد",
      "Select": "تحديد",
      "view": "تفاصيل"
    }
  }
</i18n>
