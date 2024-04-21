<template>
  <div>
    <div>
      <Title :text="$t('titre')" size="h3"></Title>
    </div>
    <v-card class="w-50 mx-auto rounded-lg pa-5 ma-5" elevation="4">
      <div class="d-flex justify-space-between">
        <div Width="40%">
          <v-img
            src="http://dummyimage.com/143x505.png/ff4444/ffffff"
            class="rounded-lg border"
            width="200px"
            height="200px"
            cover
          >
          </v-img>
        </div>
        <div Width="40%">
          <v-img
            src="https://global.discourse-cdn.com/business6/uploads/inaturalist/original/3X/f/c/fcc913843fec134673e20a788459f783e9ba822d.png"
            class="rounded-lg border"
            width="200px"
            height="200px"
            cover
          >
          </v-img>
        </div>
      </div>
      <Title
        :text="`${inputs[0].value} ${inputs[1].value}`"
        size="h4"
        class="my-5 text-center"
      ></Title>
      <v-form>
        <div
          v-for="(input, i) in inputs"
          :key="i"
          class="d-flex justify-space-between align-center"
        >
          <v-text-field
            v-model="input.value"
            :label="$t(input.title)"
            :prepend-inner-icon="input.icon"
            :type="input.type"
            :disabled="input.disabled"
            clearable
            single-line
            hide-details="auto"
            class="me-5 my-2"
            variant="outlined"
          >
          </v-text-field>
          <v-btn variant="tonal" :icon="input.editIcon" @click="edit(input)"></v-btn>
        </div>
      </v-form>
    </v-card>
  </div>
</template>
<script>
import Title from "@/components/other/Title";
export default {
  components: {
    Title,
  },
  data: () => ({
    btnDisabled: false,
    inputs: [
      {
        title: "nom",
        value: "Nadi",
        type: "text",
        icon: "mdi-account",
        disabled: true,
        editIcon: "mdi-pencil",
      },
      {
        title: "prenom",
        value: "Yassine",
        type: "text",
        icon: "mdi-account",
        disabled: true,
        editIcon: "mdi-pencil",
      },
      {
        title: "willaya",
        value: "Tissemsilet",
        type: "text",
        icon: "mdi-map-marker",
        disabled: true,
        editIcon: "mdi-pencil",
      },
      {
        title: "commune",
        value: "Bordj bounaama",
        type: "text",
        icon: "mdi-map-marker",
        disabled: true,
        editIcon: "mdi-pencil",
      },
      {
        title: "ddn",
        value: "12/07/2001",
        type: "date",
        icon: "mdi-calendar",
        disabled: true,
        editIcon: "mdi-pencil",
      },
      {
        title: "email",
        value: "yassine.nadi@gmail.Com",
        type: "email",
        icon: "mdi-email",
        disabled: true,
        editIcon: "mdi-pencil",
      },
      {
        title: "password",
        value: "123456",
        type: "password",
        icon: "mdi-lock",
        disabled: true,
        editIcon: "mdi-pencil",
      },
    ],
  }),
  methods: {
    edit(input) {
      input.editIcon = input.editIcon == "mdi-pencil" ? "mdi-check" : "mdi-pencil";
      input.disabled = !input.disabled;
      this.btnDisabled = !this.btnDisabled;
    },
  },
};
</script>
<i18n>
  {
    "fr": {
      "titre": "Mon profil",
      "nom": "Nom",
      "modifier": "Modifier",
    },
    "ar": {
      "titre": "الملف الشخصي",
      "nom": "الاسم",
      "modifier": "تعديل",
    }
  }
</i18n>
