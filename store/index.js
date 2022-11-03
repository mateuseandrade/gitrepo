export const state = () => ({
  reposFav: [],
});

export const getters = {
  favoritos(state) {
    return state.reposFav;
  },
};

export const mutations = {
  SET_FAVORITO(state, payload) {
    if (payload.fav) {
      state.reposFav = state.reposFav.filter((item) => item.id !== payload.id);
    } else {
      payload.fav = true;
      state.reposFav.push({ ...payload });
    }
  },
  ADD_FAVORITO(state, payload) {
    state.reposFav = payload;
  },
};

export const actions = {
  setFavorito({ commit }, payload) {
    commit("SET_FAVORITO", payload);
  },
  addFavorito({ commit }, payload) {
    commit("ADD_FAVORITO", payload);
  },
};
