<template>
  <tr class="reservation my-3">
    <td class="font-weight-bold text-subtitle-1 text-capitalize">
      {{ reservation.id }}
    </td>
    <td class="text-subtitle-2 text-capitalize text-center">
      {{ reservation.patient }}
    </td>
    <td class="text-subtitle-2 text-capitalize text-center">
      {{ reservation.type }}
    </td>
    <td class="text-right text-subtitle-2 text-capitalize">
      <PrimaryBtn
        v-if="voir"
        :text="$t('voir')"
        @clicked="$emit('clicked', reservation.id)"
      >
      </PrimaryBtn>
      <PrimaryBtn
        v-if="traiter"
        :text="$t('traiter')"
        @click="$emit('clicked', reservation.id)"
      >
      </PrimaryBtn>
    </td>
  </tr>
</template>

<script>
export default {
  props: {
    reservation: Object,
    traiter: Boolean,
    voir: Boolean,
  },
};
</script>
<style scoped>
.reservation {
  border: 2px solid #000;
  border-radius: 10px;
}
</style>
<i18n>
  {
    "fr": {
      "voir": "Voir",
      "traiter": "Traiter"
    },
    "ar": {
      "voir": "عرض",
      "traiter": "معالجة"
    }
  }
</i18n>
