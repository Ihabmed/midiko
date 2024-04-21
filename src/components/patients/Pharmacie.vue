<template>
  <div>
    <div class="d-flex">
      <v-btn icon="mdi-arrow-left-bold" variant="tonal" @click="$router.go(-1)"></v-btn>
      <Title :text="$t('titre')" size="h3" class="ms-4"></Title>
    </div>
    <div class="my-5">
      <v-row v-if="pharmacie">
        <v-col>
          <div class="d-flex justify-space-between">
            <div>
              <v-img
                :src="pharmacie.logo"
                class="rounded-lg"
                height="200px"
                width="200px"
                cover
              >
              </v-img>
            </div>
            <div>
              <v-img
                src="https://global.discourse-cdn.com/business6/uploads/inaturalist/original/3X/f/c/fcc913843fec134673e20a788459f783e9ba822d.png"
                class="rounded-lg border"
                height="200px"
                width="200px"
              >
              </v-img>
            </div>
          </div>
          <div>
            <v-list>
              <v-list-item :title="pharmacie.nom">
                <template v-slot:prepend>
                  <v-icon icon="mdi-hospital-building"></v-icon>
                </template>
              </v-list-item>

              <v-list-item :title="pharmacie.localisation">
                <template v-slot:prepend>
                  <v-icon icon="mdi-map-marker"></v-icon>
                </template>
              </v-list-item>

              <v-list-item :title="pharmacie.conventions">
                <template v-slot:prepend>
                  <v-icon icon="mdi-calendar-range"></v-icon>
                </template>
              </v-list-item>

              <v-list-item>
                <v-rating
                  :model-value="pharmacie.evaluation"
                  color="orange-darken-2"
                  readonly
                ></v-rating>
              </v-list-item>

              <v-list-item>
                <p class="font-weight-bold">Bio :</p>
                {{ pharmacie.bio }}
              </v-list-item>
            </v-list>
          </div>
        </v-col>
        <v-divider vertical></v-divider>
        <v-col class="pe-5">
          <v-img
            src="https://media.wired.com/photos/59269cd37034dc5f91bec0f1/master/pass/GoogleMapTA.jpg"
            width="100%"
            class="rounded-lg"
          ></v-img>
        </v-col>
      </v-row>
      <div v-else>Loading...</div>
    </div>
  </div>
</template>

<script>
import Title from "@/components/other/Title";
import { mapGetters, mapActions } from "vuex";
export default {
  components: {
    Title,
  },
  data() {
    return {
      pharmacieId: "",
    };
  },
  computed: {
    ...mapGetters("pharmacies", {
      pharmacie: "getPharmacie",
    }),
  },
  methods: {
    ...mapActions("pharmacies", ["fetchPharmacie"]),
  },
  mounted() {
    this.pharmacieId = this.$route.params.id;
    this.fetchPharmacie(this.pharmacieId);
  },
};
</script>

<i18n>
  {
    "fr": {
      "titre": "Pharmacie"
    },
    "ar": {
      "titre": "صيدلية"
    }
  }
</i18n>
