<template>
  <v-card class="w-50">
    <v-window v-model="tab">
      <v-window-item v-for="(window, i) in windows" :key="i" :value="i">
        <v-card class="text-center">
          <v-card-title>{{ window.title }}</v-card-title>
          <v-list>
            <v-list-item v-for="(input, j) in window.form" :key="j">
              <v-text-field :placeholder="input.label" :type="input.type" />
            </v-list-item>
          </v-list>
          <v-card-actions class="d-flex flex-column justify-center">
            <v-btn
              size="large"
              class="bg-primary"
              @click="auth"
              :text="window.button"
              :loading="loading"
            ></v-btn>
            <v-btn size="small" @click="tab = 1 - i" :disabled="disabled">{{
              window.secButton
            }}</v-btn>
          </v-card-actions>
        </v-card>
      </v-window-item>
    </v-window>
    <SnackBar
      ref="snackBar"
    />
  </v-card>
</template>
<script>
import SnackBar from "@/components/other/SnackBar";
export default {
  components: {
    SnackBar,
  },
  data: () => ({
    tab: 0,
    windows: [
      {
        title: "Créer un compte",
        form: [
          {
            label: "Nom d'utilisateur",
            type: "text",
          },
          {
            label: "Email",
            type: "email",
          },
          {
            label: "Password",
            type: "password",
          },
        ],
        button: "Créer",
        secButton: "J'ai un compte",
        thirdButton: "J'ai oublier mon compte",
      },
      {
        title: "Connecter à votre compte",
        form: [
          {
            label: "Email",
            type: "email",
          },
          {
            label: "Password",
            type: "password",
          },
        ],
        button: "Connecter",
        secButton: "Créer un compte",
      },
    ],
    loading: false,
    disabled: false,
  }),
  methods: {
    auth() {
      this.disabled = true;
      this.loading = true;
      setTimeout(() => {
        this.disabled = false;
        this.loading = false;
        this.$refs.snackBar.show("Votre compte a été créé avec succés.", "success")
        this.tab = 1;
      }, 2000);
    },
  },
};
</script>
