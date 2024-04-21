<template>
  <v-snackbar
    v-model="snackBar"
    :color="color"
    timeout="4000"
    close-on-content-click
    location="end end"
    class="arabic-font"
  >
    {{ $t(text) }}
    <template v-slot:actions>
      <v-btn icon="mdi-close-circle" @click="snackBar = false"> </v-btn>
    </template>
  </v-snackbar>
</template>

<script>
export default {
  data: () => ({
    snackBar: false,
    text: "",
    color: "",
  }),
  methods: {
    show(text, color) {
      this.text = text;
      this.color = color;
      this.snackBar = true;
    },
  },
};
</script>
<i18n>
  {
    "fr": {
      "created": "Votre compte a été créé avec succès.",
      "reserved": "Votre rendez-vous a été créé avec succès.",
      "employeReserved": "Réservation a été créé avec succès."
    },
    "ar": {
      "created": "تم إنشاء حسابك بنجاح",
      "reserved": "تم حجز موعدك بنجاح",
      "employeReserved": "تم إضافة الحجز بنجاح"
    }
  }
</i18n>
