<template>
  <v-dialog v-model="dialog" transition="dialog-bottom-transition" fullscreen>
    <v-toolbar>
      <v-btn
        variant="tonal"
        color="error"
        icon="mdi-close"
        @click="$emit('close')"
      ></v-btn>
      <v-toolbar-title>{{ $t("titre") }}</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="d-flex align-center">
        <PrimaryBtn
          class="rounded-pill m-3"
          :text="$t('enregistrer')"
          @click="$emit('close')"
        ></PrimaryBtn>
      </v-toolbar-items>
    </v-toolbar>
    <v-sheet class="pa-5">
      <v-row>
        <v-col cols="8">
          <Title size="h5" :text="$t('ecrire')" class="mb-5"></Title>
          <v-textarea :label="$t('contenu')" variant="outlined" rows="8"></v-textarea>
          <v-textarea :label="$t('resume')" variant="outlined" rows="3"></v-textarea>
        </v-col>
        <v-divider vertical></v-divider>
        <v-col>
          <div>
            <Title :text="$t('fichies')" size="h6" class="mb-5"></Title>
            <v-file-input clearable label="File input" variant="outlined"></v-file-input>
          </div>
        </v-col>
      </v-row>
    </v-sheet>
  </v-dialog>
</template>
<script>
import Title from "@/components/other/Title.vue";
export default {
  props: {
    visible: Boolean,
  },
  components: {
    Title,
  },
  data: () => ({
    dialog: false,
  }),
  watch: {
    visible(newValue) {
      // Update the local variable whenever the prop changes
      this.dialog = newValue;
    },
  },
};
</script>
<i18n>
  {
    "fr": {
      "titre": "Rapport",
      "fichies": "Liste de fichies",
      "enregistrer": "Enregistrer",
      "ecrire": "Ecrire le rapport",
      "contenu": "Contenu de rapport",
      "resume": "Résume de rapport"
    },
    "ar": {
      "titre": "التقرير",
      "fichies": "قائمة الملفات المرفقة",
      "enregistrer": "حفظ",
      "ecrire": "كتابة التقرير",
      "contenu": "محتوى التقرير",
      "resume": "ملخص التقرير"
    }
  }
</i18n>
