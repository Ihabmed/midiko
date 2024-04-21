<template>
  <v-row>
    <v-col cols="12" sm="10" md="8" lg="6">
      <v-window v-model="tab">
        <v-window-item v-for="(window, i) in windows" :key="i" :value="i">
          <v-card class="card text-center rounded-lg py-5 elevation-4">
            <v-card-title>{{ $t(window.title) }}</v-card-title>
            <v-list class="bg-transparent">
              <v-list-item v-for="(input, j) in window.form" :key="j">
                <v-text-field
                  clearable
                  :prepend-inner-icon="input.icon"
                  color="primary"
                  :placeholder="$t(input.label)"
                  :type="input.type"
                  v-model="input.value"
                />
              </v-list-item>
            </v-list>
            <v-card-actions class="d-flex flex-column justify-center">
              <PrimaryBtn
                @click="this.$emit('auth', window.form)"
                :text="$t(window.button)"
                :loading="loading"
              />
              <LinkBtn
                v-if="window.secButton"
                class="mt-2"
                size="small"
                @click="tab = 1 - i"
                :disabled="disabled"
                :text="$t(window.secButton)"
              />
            </v-card-actions>
          </v-card>
        </v-window-item>
      </v-window>
    </v-col>
  </v-row>
</template>

<script>
import SnackBar from "@/components/other/SnackBar";
export default {
  components: {
    SnackBar,
  },
  props: {
    windows: Array,
    loadingBtn: Boolean,
  },
  data() {
    return {
      tab: 0,
      loading: false,
      disabled: false,
    };
  },
};
</script>
<style scoped>
.card {
  backdrop-filter: blur(5px);
}
</style>
<i18n>
  {
    "fr": {
      "titre-sign": "Créer un compte",
      "titre-log": "Connecter à votre compte",
      "user": "Nom d'utilisateur",
      "email": "Adresse email",
      "password": "Mot de passe",
      "sign": "Créer",
      "log": "Connexion",
      "titre-sign-clinic": "Créer un clinique",
      "clinic-name": "Nom de la clinique",
      "phone": "N° de telephone"
    },
    "ar": {
      "titre-sign": "أنشئ حساب جديد",
      "titre-log": "سجل الدخول إلى حسابك",
      "user": "اسم المستخدم",
      "email": "البريد الالكتروني",
      "password": "كلمة المرور",
      "sign": "إنشاء الحساب",
      "log": "تسجيل الدخول",
      "titre-sign-clinic": "إنشاء عيادة",
      "clinic-name": "اسم العيادة",
      "phone": "رقم الهاتف"
    }
  }
</i18n>
