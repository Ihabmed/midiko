<template>
    <v-app-bar app color="primary">
      <v-toolbar-title>Midiko</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn variant="plain" v-for="(page, index) in pages" :key="index" :to="page.route">{{ page.title }}</v-btn>
    </v-app-bar>
  </template>
  
  <script>
  export default {
    name: "NavBar",
    data() {
      return {
        pages: [
          { title: "Accueil", route: "/" },
          { title: "Portail patient", route: null },
          { title: "Portail clinique", route: null },
          { title: "Contactez", route: null },
          { title: "À propos", route: null }
        ]
      };
    }
  };
  </script>
  