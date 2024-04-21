// Styles
import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";

// Vuetify
import { createVuetify } from "vuetify";

import { VBtn } from "vuetify/components/VBtn";

export default createVuetify({
  theme: {
    themes: {
      light: {
        colors: {
          primary: "#54DF7B",
          primaryDarken: "#010402",
          secondary: "#EF8473",
          light: "#FBFEFC",
        },
      },
      dark: {
        colors: {
          primary: "#54DF7B",
          primaryDarken: "#010402",
          secondary: "#EF8473",
          light: "#FBFEFC",
        },
      },
    },
  },
  components: {
    VBtn,
  },
  aliases: {
    PrimaryBtn: VBtn,
    SecondaryBtn: VBtn,
    PageBtn: VBtn,
    LinkBtn: VBtn,
  },
  defaults: {
    PrimaryBtn: {
      color: "primary",
      class: "px-7 text-light",
      style: "text-transform: capitalize;background-image: linear-gradient(to bottom, #81F888, #28C76F) !important;",
      elevation: "0",
      size: "large",
      rounded: true,
    },
    SecondaryBtn: {
      class: "px-7",
      style: "text-transform: capitalize;",
      variant: "tonal",
      rounded: true,
    },
    PageBtn: {
      variant: "plain",
      style: "text-transform: capitalize;",
      ripple: false,
    },
    LinkBtn: {
      variant: "plain",
      style: "text-transform: capitalize;text-decoration: underline;",
      ripple: false,
    },
  },
});

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
