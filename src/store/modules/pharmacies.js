import axios from "axios";
const state = {
  pharmacies: [],
  pharmacie: {},
};

const mutations = {
  setPharmacies(state, pharmacies) {
    state.pharmacies = pharmacies;
  },
  setPharmacie(state, pharmacie) {
    state.pharmacie = pharmacie;
  }
};

const actions = {
  async fetchPharmacies({ commit }) {
    try {
      const response = await axios.get('http://localhost:5000/pharmacies');
      commit('setPharmacies', response.data);
    } catch (error) {
      console.error('Error fetching pharmacies:', error);
    }
  },
  async fetchPharmacie({ commit }, pharmacieId) {
    try {
      const response = await axios.get(`http://localhost:5000/pharmacies/${pharmacieId}`);
      commit('setPharmacie', response.data);
    } catch (error) {
      console.error('Error fetching pharmacies:', error);
    }
  },
};

const getters = {
  getPharmacies: state => state.pharmacies,
  getPharmacie: state => state.pharmacie,
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
};
