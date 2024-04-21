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
        title: "titre-sign-clinic",
        form: [
          {
            label: "clinic-name",
            type: "text",
            icon: "mdi-hospital-building",
          },
          {
            label: "phone",
            type: "phone",
            icon: "mdi-phone",
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
            label: "clinic-name",
            type: "text",
            icon: "mdi-hospital-building",
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
          this.$router.push("/cliniques/dashboard");
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
  background-image: url("../../assets/clinique_background.webp");
  background-size: cover;
  background-position: center;
}
</style>
