<template>
  <v-layout>
    <SideBar
      @signOut="showAlert()"
      :items="items"
      type="patients"
      @elementChanged="changeActiveElement"
    />
    <v-main>
      <router-view class="pa-5"></router-view>
    </v-main>
  </v-layout>
  <Alert ref="alert" @confirmed="signOut()" />
</template>
<script>
import SideBar from "@/components/global/SideBar";
import Alert from "@/components/other/Alert.vue";
import { mapActions, mapGetters } from "vuex";

export default {
  components: {
    SideBar,
    Alert,
  },
  data: () => ({
    items: [
      {
        title: "reserver",
        icon: "mdi-plus-circle",
        class: "gradient-bg text-white",
      },
      {
        title: "accueil",
        icon: "mdi-home",
        color: "primary",
      },
      {
        title: "reservations",
        icon: "mdi-calendar-range",
        color: "primary",
      },
      {
        title: "dossier-medical",
        icon: "mdi-folder-account",
        color: "primary",
      },
      {
        title: "cliniques",
        icon: "mdi-hospital-building",
        color: "primary",
      },
      {
        title: "pharmacies",
        icon: "mdi-store",
        color: "primary",
      },
      {
        title: "profil",
        icon: "mdi-account",
        color: "primary",
      },
      {
        title: "parametres",
        icon: "mdi-cog",
        color: "primary",
      },
      {
        title: "deconnecter",
        icon: "mdi-logout",
        baseColor: "error",
      },
    ],
  }),
  mounted() {
    if (
      this.$route.path == "/patients/dashboard" ||
      this.$route.path == "/patients/dashboard/"
    ) {
      this.$router.push("/patients/dashboard/accueil");
      this.updateActiveElement("accueil");
    }
  },
  methods: {
    ...mapActions(["updateActiveElement"]),
    signOut() {
      this.$router.push("/patients/auth");
    },
    changeActiveElement(element) {
      if (element === "deconnecter") {
        this.$refs.alert.show("deconnecter", "oui", "annuler", "error", "primary");
      } else {
        this.updateActiveElement(element);
        this.$router.push("/patients/dashboard/" + element);
      }
    },
  },
};
</script>
