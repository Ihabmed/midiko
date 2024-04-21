<template>
  <div>
    <div class="d-flex justify-start align-center">
      <v-btn
        class="rounded-cirlce me-3"
        elevation="0"
        variant="tonal"
        icon="mdi-arrow-left"
        @click="$router.go(-1)"
      >
      </v-btn>
      <Title :text="$t('titre')" size="h3"></Title>
    </div>
  </div>
</template>
<script>
import Title from "@/components/other/Title.vue";
export default {
  components: {
    Title,
  },
};
</script>
<i18n>
  {
    "fr": {
      "titre": "Dossier medical"
    },
    "ar": {
      "titre": "الملف الطبي"
    }
  }
</i18n>
