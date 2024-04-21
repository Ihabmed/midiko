<template>
  <div class="mainContainer h-100">
    <v-container class="h-100 d-flex align-center">
      <Auth :windows="windows" @auth="auth" ref="auth" />
    </v-container>
  </div>
  <SnackBar ref="snackBar" />
</template>
<script>
import Auth from "@/components/global/Auth";
import SnackBar from "@/components/other/SnackBar";
export default {
  components: {
    Auth,
    SnackBar,
  },
  data: () => ({
    windows: [
      {
        title: "titre-log",
        form: [
          {
            label: "user",
            type: "text",
            icon: "mdi-account",
            value: null,
          },
          {
            label: "password",
            type: "password",
            icon: "mdi-lock",
            value: null,
          },
        ],
        button: "log",
      },
    ],
  }),
  methods: {
    auth(form) {
      this.$refs.auth.loading = true;
      this.$refs.auth.disabled = true;
      setTimeout(() => {
        if (form[0].value == "secretaire") {
          this.$router.push("/employe/secretaire/dashboard");
        } else if (form[0].value == "docteur") {
          this.$router.push("/employe/docteur/dashboard");
        }
      }, 2000);
    },
  },
};
</script>
<style scoped>
.mainContainer {
  background-image: url("../../assets/employe_background.webp");
  background-size: cover;
  background-position: center;
}
</style>
