<template>
  <div>
    <Title :text="$t('titre')" size="h3" class="mb-5"></Title>
    <v-stepper v-model="step" class="pe-3">
      <v-stepper-header>
        <v-stepper-item :title="$t('diagnostics')" value="1"></v-stepper-item>
        <v-divider></v-divider>
        <v-stepper-item :title="$t('clinique')" value="2"></v-stepper-item>
        <v-divider></v-divider>
        <v-stepper-item :title="$t('confirmer')" value="3"></v-stepper-item>
      </v-stepper-header>
      <v-card elevation="0">
        <v-stepper-window :model-value="step">
          <v-stepper-window-item>
            <v-select
              :items="options"
              :label="$t('que')"
              v-model="consultationType"
            ></v-select>
            <v-text-field v-model="reason" :label="$t('reason')" clearable></v-text-field>
            <v-textarea v-model="desc" :label="$t('description')"></v-textarea>
          </v-stepper-window-item>

          <v-stepper-window-item>
            <v-text-field
              v-model="search"
              :label="$t('ou')"
              clearable
              prepend-inner-icon="mdi-magnify"
              flat
              hide-details
              single-line
            ></v-text-field>

            <v-data-table v-model:search="search" :items="cliniques" :headers="headers">
              <template v-slot:item="{ item }">
                <ClinicItem
                  :clinique="item"
                  selectable
                  :selected="selectedItem == item"
                  @select="updateSelection(item)"
                >
                </ClinicItem>
              </template>
            </v-data-table>
          </v-stepper-window-item>

          <v-stepper-window-item>
            <v-row class="d-flex align-center">
              <v-col>
                <span class="text-h5">{{ $t("confirmerT") }}</span>
                <v-card
                  variant="outlined"
                  max-height="450px"
                  class="my-3 pa-2 overflow-y-auto"
                >
                  <v-list lines="two">
                    <v-list-item :title="$t('que')">
                      <p class="text-body-2">
                        {{ consultationType }}
                      </p>
                    </v-list-item>
                    <v-list-item :title="$t('reasonT')">
                      <p class="text-body-2">
                        {{ reason }}
                      </p>
                    </v-list-item>
                    <v-list-item :title="$t('description')">
                      <p class="text-body-2">{{ desc }}</p>
                    </v-list-item>
                    <v-list-item :title="$t('clinic-name')">
                      <p class="text-body-2">
                        {{ selectedItem.nom }}
                      </p>
                    </v-list-item>
                    <v-list-item :title="$t('reservations')">
                      <p class="text-body-2">
                        {{ selectedItem.reservations }}
                      </p>
                    </v-list-item>
                  </v-list>
                  <div class="d-flex justify-center">
                    <PrimaryBtn
                      @click="confirm()"
                      :loading="loading"
                      class="d-flex justify-self-center"
                    >
                      {{ $t("confirmer") }}
                    </PrimaryBtn>
                  </div>
                </v-card>
              </v-col>
              <v-col>
                <v-img max-height="450px" src="@/assets/confirm.svg" />
              </v-col>
            </v-row>
          </v-stepper-window-item>
        </v-stepper-window>
      </v-card>
      <v-stepper-actions
        @click:next="step++"
        @click:prev="step--"
        :next-text="$t('suivant')"
        :prev-text="$t('precedent')"
      ></v-stepper-actions>
    </v-stepper>
    <SnackBar ref="snackBar" />
  </div>
</template>

<script>
import ClinicItem from "@/components/global/ClinicItem";
import SnackBar from "@/components/other/SnackBar";
import Title from "@/components/other/Title";
import { mapGetters, mapActions } from "vuex";
export default {
  components: {
    ClinicItem,
    SnackBar,
    Title,
  },
  data: () => ({
    step: 0,
    options: ["consultation", "examen", "rdv"],
    search: "",
    headers: [
      { title: "" },
      { title: "nom", key: "nom", sortable: true },
      { title: "localisation", key: "localisation", align: "center", sortable: true },
      { title: "reservations", key: "reservations", align: "center", sortable: true },
      { title: "evaluation", key: "evaluation", align: "center", sortable: true },
      { title: "" },
    ],
    selectedItem: null,
    consultationType: null,
    reason: null,
    desc: null,
    loading: false,
  }),
  methods: {
    updateSelection(item) {
      if (this.selectedItem == item) {
        this.selectedItem = null;
      } else {
        this.selectedItem = item;
      }
    },
    confirm() {
      this.loading = true;
      setTimeout(() => {
        this.$refs.snackBar.show("reserved", "success");
        this.loading = false;
      }, 2000);
    },
    ...mapActions("cliniques", ["fetchCliniques"]),
  },
  computed: {
    ...mapGetters("cliniques", {
      cliniques: "getCliniques",
    }),
  },
  created() {
    this.fetchCliniques();
  },
};
</script>
<i18n>
  {
    "ar": {
      "titre": "حجر موعد استشارة طبية",
      "diagnostics": "التشخيص",
      "clinique": "العيادة",
      "confirmer": "تأكيد",

      "consultation": "استشارة طبية",
      "examen": "تحاليل",
      "rdv": "موعد",

      "que": "ما الذي تريد القيام به ؟",
      "reason": "ماهو سبب هذا الحجز", 
      "description": "أخبرنا المزيد عن حالتك",
      "ou": "في أي عيادة تريد إجراء إستشارتك",
      "suivant": "التالي",
      "precedent": "السابق",

      "nom": "الاسم",
      "location": "الموقع",
      "reservations": "الحجوزات",
      "rating": "التقييم",

      "confirmerT": "قم بتأكيد حجزك",
      "clinic-name": "إسم العيادة",
      "reasonT": "سبب الحجز"
    },
    "fr": {
      "titre": "Réserver une consultation médical",
      "diagnostics": "Diagnostics",
      "clinique": "Clinique",
      "confirmer": "Confirmer",

      "consultation": "Consultation",
      "examen": "Examen",
      "rdv": "Rendez-vous",

      "que": "Que voulez-vous faire ?",
      "reason": "Quelle est la raison de cette réserve ?",
      "description": "Parlez-nous en plus de votre état",
      "ou": "Dans quelle clinique souhaitez-vous faire votre consultation ?",
      "suivant": "Suivant",
      "precedent": "Précédent",
      
      "nom": "Nom",
      "location": "Localisation",
      "reservations": "Réservations",
      "rating": "Evaluation",

      "confirmerT": "Confirmer votre réservation",
      "clinic-name": "Nom de clinique",
      "reasonT": "Raison de la réservation"
    }
  }
</i18n>
