import { createStore } from "vuex";
import activeElement from "./modules/ActiveElement";
import cliniques from "./modules/cliniques";
import pharmacies from "./modules/pharmacies";
import reservations from "./modules/reservations";
export default createStore({
  modules: {
    activeElement,
    cliniques,
    pharmacies,
    reservations
  },
});
