<template>
  <v-layout>
    <SideBar
      @signOut="showAlert()"
      :items="items"
      type="docteur"
      @elementChanged="changeActiveElement"
    />
    <v-main>
      <router-view class="pa-5" style="min-height: 90vh"></router-view>
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
        title: "traiter",
        icon: "mdi-doctor",
        class: "gradient-bg",
      },
      {
        title: "accueil",
        icon: "mdi-home",
        color: "primary",
      },
      {
        title: "reservations-traiter",
        icon: "mdi-calendar-check",
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
      this.$route.path == "/employe/dashboard" ||
      this.$route.path == "/employe/dashboard/"
    ) {
      this.$router.push("/employe/dashboard/accueil");
      this.updateActiveElement("accueil");
    }
  },
  methods: {
    ...mapActions(["updateActiveElement"]),
    signOut() {
      this.$router.push("/employe/auth");
    },
    changeActiveElement(element) {
      if (element === "deconnecter") {
        this.$refs.alert.show("deconnecter", "oui", "annuler", "error", "primary");
      } else {
        this.updateActiveElement(element);
        this.$router.push("/employe/docteur/dashboard/" + element);
      }
    },
  },
};
</script>
