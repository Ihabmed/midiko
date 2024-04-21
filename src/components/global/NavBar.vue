<template>
  <v-app-bar elevation="0" class="sticky border-b">
    <v-toolbar-title>
      <v-img height="30px" src="@/assets/long_logo.png"></v-img>
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <PageBtn
      v-for="(page, index) in pages"
      :key="index"
      :to="page.route"
      :text="$t(page.title)"
      size="large"
    />
    <v-btn icon="mdi-theme-light-dark" @click="toggleTheme" />
    <v-btn icon="mdi-translate" id="menu-activator" />
    <v-menu class="pa-8" activator="#menu-activator">
      <v-list class="arabic-font" nav>
        <v-list-item
          v-for="(lang, i) in langs"
          :key="i"
          :value="i"
          @click="changeLocale(lang.code)"
        >
          <template v-slot:prepend>
            <v-icon :icon="lang.icon"></v-icon>
          </template>
          <v-list-item-title class="d-flex">
            {{ $t(lang.code) }}
          </v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </v-app-bar>
</template>

<script>
import Cookies from "vue-cookies";
export default {
  name: "NavBar",
  data() {
    return {
      pages: [
        { title: "acceuil", route: "/" },
        /*this link need to be changed to /portail-patient*/
        { title: "patients", route: "/patients/auth" },
        { title: "employe", route: "/employe/auth" },
        { title: "cliniques", route: "/cliniques/auth" },
        { title: "contactez", route: null },
        { title: "a-propos", route: null },
      ],
      themeIcon: "mdi-weather-night",
      langs: [
        { code: "ar", icon: "mdi-abjad-arabic" },
        { code: "fr", icon: "mdi-alpha-f" },
      ],
    };
  },
  methods: {
    changeLocale(locale) {
      this.$i18n.locale = locale;
      this.$vuetify.locale.current = locale;
      Cookies.set("locale", locale);
    },
  },
};
</script>
<script setup>
import { useTheme } from "vuetify";
import Cookies from "vue-cookies";
const theme = useTheme();

function toggleTheme() {
  if (theme.global.name.value == "dark") {
    theme.global.name.value = "light";
    Cookies.set("theme", "light");
  } else {
    theme.global.name.value = "dark";
    Cookies.set("theme", "dark");
  }
}
</script>
<style scoped>
.sticky {
  position: fixed !important;
}
</style>
<i18n>
  {
  "fr": {
    "acceuil": "Accueil",
    "patients": "Patients",
    "employe": "Employé",
    "cliniques": "Cliniques",
    "contactez": "Contactez",
    "a-propos": "A propos",
    "ar": "َArabic",
    "fr": "Francais"
  },
  "ar": {
    "acceuil": "الرئيسية",
    "patients": "المرضى",
    "employe": "الموظفين",
    "cliniques": "العيادات",
    "contactez": "اتصل بنا",
    "a-propos": "حولنا",
    "ar": "العربية",
    "fr": "الفرنسية"
  }
}
</i18n>
