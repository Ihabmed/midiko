<template>
  <v-dialog v-model="visible" class="w-50">
    <v-card class="arabic-font">
      <v-card-title>{{ $t(title) }}</v-card-title>
      <v-card-actions class="d-flex justify-end">
        <v-btn variant="tonal" :color="confirmColor" @click="confirm">{{
          $t(confirmText)
        }}</v-btn>
        <v-btn variant="tonal" :color="cancelColor" @click="cancel">{{
          $t(cancelText)
        }}</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
<script>
export default {
  data: () => ({
    visible: false,
    title: "",
    confirmText: "",
    confirmColor: "",
    cancelText: "",
    cancelColor: "",
  }),
  methods: {
    show(title, confirmText, cancelText, confirmColor, cancelColor) {
      this.title = title;
      this.confirmText = confirmText;
      this.cancelText = cancelText;
      this.confirmColor = confirmColor;
      this.cancelColor = cancelColor;
      this.visible = true;
    },
    confirm() {
      this.visible = false;
      this.$emit("confirmed");
    },
    cancel() {
      this.visible = false;
      this.$emit("canceled");
    },
  },
};
</script>
<i18n>
  {
    "fr": {
      "deconnecter": "Voulez-vous déconnecter ?",
      "oui": "Oui",
      "annuler": "Annuler"
    },
    "ar": {
      "deconnecter": "هل تريد تسجيل الخروج ؟",
      "oui": "نعم",
      "annuler": "إلغاء"
    }
  }
</i18n>
