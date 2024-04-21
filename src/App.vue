<template>
  <v-app :class="{ 'arabic-font': $vuetify.locale.current === 'ar' }">
    <nav-bar />
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import NavBar from "@/components/global/NavBar.vue";

export default {
  name: "App",
  components: {
    NavBar,
  },
  created() {
    this.$watch(
      () => this.$vuetify.locale.current,
      (newValue) => {
        this.$i18n.locale = newValue;
      }
    );
    if (Cookies.get("locale") == "ar") this.$vuetify.locale.current = "ar";
    else this.$vuetify.locale.current = "fr";
  },
};
</script>
<script setup>
import { useTheme } from "vuetify";
import Cookies from "vue-cookies";
const theme = useTheme();
window.onload = function () {
  if (Cookies.get("theme") == "dark") theme.global.name.value = "dark";
  else theme.global.name.value = "light";
};
</script>
<style>
:root {
  --my-gradient: linear-gradient(to bottom, #81f888, #28c76f) !important;
}

.gradient-bg {
  background: var(--my-gradient) !important;
}

.arabic-font {
  font-family: "Almarai", sans-serif !important;
  font-weight: 400 !important;
}
</style>
