import axios from "axios";
const state = {
  reservations: [],
  reservation: {},
};

const mutations = {
  setReservations(state, reservations) {
    state.reservations = reservations;
  },
  setReservation(state, reservation) {
    state.reservation = reservation;
  },
};

const actions = {
  async fetchReservations({ commit }) {
    try {
      const response = await axios.get('http://localhost:5000/reservations');
      commit('setReservations', response.data);
    } catch (error) {
      console.error('Error fetching reservations:', error);
    }
  },
  async fetchReservation({ commit }, reservationId) {
    try {
      const response = await axios.get(`http://localhost:5000/reservations/${reservationId}`);
      commit('setReservation', response.data);
    } catch (error) {
      console.error('Error fetching reservation:', error);
    }
  },
};

const getters = {
  getReservations: state => state.reservations,
  getReservation: state => state.reservation,
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
};