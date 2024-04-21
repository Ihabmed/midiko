const state = {
  activeElement: null,
};

const mutations = {
  setActiveElement(state, element) {
    state.activeElement = element;
  },
};

const actions = {
  updateActiveElement({ commit }, element) {
    commit('setActiveElement', element);
  },
};

const getters = {
  activeElement: state => state.activeElement,
};

export default {
  state,
  getters,
  actions,
  mutations,
};
