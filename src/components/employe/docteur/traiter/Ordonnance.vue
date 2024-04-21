<template>
  <v-dialog v-model="dialog" transition="dialog-bottom-transition" fullscreen>
    <v-toolbar>
      <v-btn
        variant="tonal"
        color="error"
        icon="mdi-close"
        @click="$emit('close')"
      ></v-btn>
      <v-toolbar-title>{{ $t("titre") }}</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="d-flex align-center">
        <PrimaryBtn
          class="rounded-pill m-3"
          :text="$t('enregistrer')"
          @click="$emit('close')"
        ></PrimaryBtn>
      </v-toolbar-items>
    </v-toolbar>
    <v-sheet class="pa-5">
      <v-row>
        <v-col cols="8">
          <Title size="h5" :text="$t('medsList')" class="mb-5"></Title>
          <MedItem
            v-for="(med, index) in meds"
            :key="index"
            :med="med"
            :index="index"
            @added="add"
            @removed="remove(index)"
            class="my-2"
          ></MedItem>
        </v-col>
        <v-divider vertical></v-divider>
        <v-col>
          <div class="d-flex justify-space-between align-center">
            <Title :text="$t('apercu')" size="h6"></Title>
            <div>
              <v-btn
                class="text-capitalize rounded-pill ms-3 gradient-bg text-white"
                elevation="0"
                :text="$t('print')"
                append-icon="mdi-printer"
                @click="printCard"
              >
              </v-btn>
            </div>
          </div>
          <v-card
            ref="ordonnance"
            theme="light"
            class="d-flex flex-column border rounded mt-3 pa-3"
            min-height="40vw"
            elevation="4"
          >
            <div class="text-body-1 d-flex justify-space-between">
              <div>
                <p class="font-weight-bold">Clinique Al -Badr</p>
                <p class="font-weight-bold">Dr Yassine Nadi</p>
              </div>
              <div class="text-end">
                <p><b>Date</b> : 15-05-2022</p>
                <p><b>N°</b> : 241535</p>
              </div>
            </div>
            <div class="d-flex justify-space-between mt-2">
              <p><b>Nom</b> : Nadi</p>
              <p><b>Pénom</b> : Yassine</p>
              <p><b>Age</b> : 23</p>
            </div>
            <div class="text-blue-darken-1 text-center my-3">
              <Title class="title" text="Ordonnance" size="h5"></Title>
            </div>
            <div class="px-3">
              <v-table class="text-body-2">
                <template :key="i" v-for="(med, i) in meds">
                  <tr v-if="i !== meds.length - 1">
                    <td class="">{{ i + 1 }} - {{ med.nom }}</td>
                    <td class="text-end">{{ med.dose }} mg</td>
                    <td class="text-end">{{ med.frequence }} fois/jour</td>
                  </tr>
                  <tr v-if="i !== meds.length - 1">
                    <td></td>
                    <td class="text-end">{{ med.duration }} jour</td>
                    <td class="text-end">via {{ med.voie }}</td>
                  </tr>
                </template>
              </v-table>
            </div>
            <div class="mt-auto">
              <p class="text-body-2 font-weight-bold mb-15 text-end me-10">Signature</p>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </v-sheet>
  </v-dialog>
</template>
<script>
import Title from "@/components/other/Title.vue";
import MedItem from "@/components/employe/docteur/traiter/MedItem.vue";
export default {
  props: {
    visible: Boolean,
  },
  components: {
    MedItem,
    Title,
  },
  data: () => ({
    ordonnance: [
      {
        label: "nom",
        type: "text",
      },
      {
        label: "prenom",
        type: "text",
      },
      {
        label: "type",
        type: "text",
      },
    ],
    meds: [
      {
        nom: null,
        dose: null,
        frequence: null,
        duration: null,
        voie: null,
        added: false,
      },
    ],
    dialog: false,
  }),
  watch: {
    visible(newValue) {
      // Update the local variable whenever the prop changes
      this.dialog = newValue;
    },
  },
  methods: {
    add(index) {
      this.meds[index].added = true;

      this.meds[index].added = true;
      const med = {
        nom: null,
        dose: null,
        frequence: null,
        duration: null,
        voie: null,
        added: false,
      };
      this.meds.push(med);
    },
    remove(index) {
      console.log("slice:", index);

      this.meds.splice(index, 1);
      console.log("After removal:", this.meds);
    },
    printCard() {
      // Get the card element
      const card = this.$refs.ordonnance.$el;

      // Create a hidden iframe for printing
      const iframe = document.createElement("iframe");
      iframe.style.display = "none";
      document.body.appendChild(iframe);
      const iframeWindow = iframe.contentWindow;

      // Write the HTML content of the card to the iframe
      iframeWindow.document.write(`
      <!DOCTYPE html>
      <html>
      <head>
        <title>Print</title>
        <style>
          @media print {
            @page {
              size: A5;
            }
          }
        </style>
      </head>
      <body>${card.innerHTML}</body>
      </html>
    `);

      // Close the document after printing
      iframeWindow.document.close();

      // Trigger the print process
      iframeWindow.print();

      // Remove the iframe from the DOM after printing
      setTimeout(() => {
        document.body.removeChild(iframe);
      }, 1000); // Delay the removal to ensure printing is complete
    },
  },
};
</script>
<i18n>
  {
    "fr": {
      "titre": "Ordonnance",
      "medsList": "La liste des médicament",
      "apercu": "Aperçu de l'ordonnance",
      "print": "Imprimer",
      "enregistrer": "Enregistrer",
    },
    "ar": {
      "titre": "وصفة طبية",
      "medsList": "قائمة الدواء",
      "apercu": "اتعراض الوصفة الطبية",
      "print": "طباعة",
      "enregistrer": "حفظ",
    }
  }
</i18n>
