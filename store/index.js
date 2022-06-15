export const state = () => ({
  reposFav: [],
  repoInfo: {},
})

export const getters = {
  favoritos(state) {
    return state.reposFav
  },
  detalhesRepo(state) {
    return state.repoInfo
  }
}

export const mutations = {
  setFav(state, payload) {
    if (payload.fav) {
      state.reposFav = state.reposFav.filter(item => item.id !== payload.id)
      console.log(state.reposFav);
    } else {
      payload.fav = true
      state.reposFav.push({ ...payload })
    }
  },
  addFavoritos(state, payload) {
    state.reposFav = payload
  },
  setRepoInfo(state, payload) {
    state.repoInfo = payload
  },
}

export const actions = {
  setFavorito({ commit }, payload) {
    commit('setFav', payload)
  },
  adicionarFavoritos({ commit }, payload) {
    commit('addFavoritos', payload)
  },
  setDetalhesRepo({ commit }, payload) {
    commit('setRepoInfo', payload)
  },
}
