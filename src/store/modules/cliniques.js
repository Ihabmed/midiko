import axios from "axios";
const state = {
  cliniques: [],
  clinique: {},
};

const mutations = {
  setCliniques(state, cliniques) {
    state.cliniques = cliniques;
  },
  setClinique(state, clinique) {
    state.clinique = clinique;
  }
};

const actions = {
  async fetchCliniques({ commit }) {
    try {
      const response = await axios.get('http://localhost:5000/cliniques');
      commit('setCliniques', response.data);
    } catch (error) {
      console.error('Error fetching cliniques:', error);
    }
  },
  async fetchClinique({ commit }, cliniqueId) {
    try {
      const response = await axios.get(`http://localhost:5000/cliniques/${cliniqueId}`);
      commit('setClinique', response.data);
    } catch (error) {
      console.error('Error fetching clinique:', error);
    }
  },
};

const getters = {
  getCliniques: state => state.cliniques,
  getClinique: state => state.clinique,
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
};
