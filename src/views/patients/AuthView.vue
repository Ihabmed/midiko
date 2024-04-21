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
        title: "titre-sign",
        form: [
          {
            label: "user",
            type: "text",
            icon: "mdi-account",
          },
          {
            label: "email",
            type: "email",
            icon: "mdi-email",
          },
          {
            label: "password",
            type: "password",
            icon: "mdi-lock",
          },
        ],
        button: "sign",
        secButton: "log",
      },
      {
        title: "titre-log",
        form: [
          {
            label: "email",
            type: "email",
            icon: "mdi-email",
          },
          {
            label: "password",
            type: "password",
            icon: "mdi-lock",
          },
        ],
        button: "log",
        secButton: "sign",
      },
    ],
  }),
  methods: {
    auth(tab) {
      if (tab == 0) {
        this.$refs.auth.loading = true;
        this.$refs.auth.disabled = true;
        setTimeout(() => {
          this.$refs.snackBar.show("created", "success");
          this.$refs.auth.loading = false;
          this.$refs.auth.disabled = false;
        }, 2000);
      } else {
        this.$refs.auth.loading = true;
        this.$refs.auth.disabled = true;
        setTimeout(() => {
          this.$router.push("/patients/dashboard");
          this.$refs.auth.loading = false;
          this.$refs.auth.disabled = false;
        }, 2000);
      }
    },
  },
};
</script>
<style scoped>
.mainContainer {
  background-image: url("../../assets/patient_background.webp");
  background-size: cover;
  background-position: center;
}
</style>
