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
          <Title size="h5" :text="$t('informations')" class="mb-5"></Title>
          <ExamenItem
            v-for="(examen, index) in examens"
            :key="index"
            :examen="examen"
            :index="index"
            @added="add"
            @removed="remove(index)"
            class="my-2"
          ></ExamenItem>
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
              <Title class="title" text="Demande d'examen" size="h5"></Title>
              <Title text="Pierre de faire" size="h6"></Title>
            </div>
            <div class="px-3">
              <v-sheet class="text-body-2" :key="i" v-for="(examen, i) in examens">
                <template v-if="examen.type != null">
                  <p>{{ i + 1 }} - <b>Type d'examen</b> : {{ examen.type }}</p>
                  <p v-if="examen.reason != null">
                    <b>Reason d'examen</b> : {{ examen.reason }}
                  </p>
                  <p v-if="examen.but != null"><b>But d'examen</b> : {{ examen.but }}</p>
                </template>
              </v-sheet>
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
import ExamenItem from "@/components/employe/docteur/traiter/ExamenItem";
export default {
  props: {
    visible: Boolean,
  },
  components: {
    Title,
    ExamenItem,
  },
  data: () => ({
    dialog: false,
    examens: [
      {
        type: null,
        reason: null,
        but: null,
        added: false,
      },
    ],
  }),
  watch: {
    visible(newValue) {
      // Update the local variable whenever the prop changes
      this.dialog = newValue;
    },
  },
  methods: {
    add(index) {
      this.examens[index].added = true;

      this.examens[index].added = true;
      const examen = {
        type: null,
        reason: null,
        but: null,
        added: false,
      };
      this.examens.push(examen);
    },
    remove(index) {
      console.log("slice:", index);

      this.examens.splice(index, 1);
      console.log("After removal:", this.examens);
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
      "titre": "Examen",
      "apercu": "Aperçu de demande d'examen",
      "print": "Imprimer",
      "enregistrer": "Enregistrer",
    },
    "ar": {
      "titre": "إختبار",
      "apercu": "استعراض طلب الإختبار",
      "print": "طباعة",
      "enregistrer": "حفظ",
    }
  }
</i18n>
