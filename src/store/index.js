import axios from 'axios'
import { createStore } from 'vuex'

export const store = createStore({
  state: () => ({
    packages: [],
    isLoading: false,
    error: null
  }),

  mutations: {
    SET_PACKAGES(state, packages) {
      state.packages = packages
    },
    SET_LOADING(state, isLoading) {
      state.isLoading = isLoading
    },
    SET_ERROR(state, error) {
      state.error = error
    }
  },

  actions: {
    async searchPackage({ commit }, packageName) {
      commit('SET_LOADING', true)
      try {
        const response = await axios.get(`search?text=${packageName}`)
        const packages = response.data.objects.map((obj) => obj.package)
        commit('SET_PACKAGES', packages)
      } catch (error) {
        commit('SET_ERROR', error.message)
      } finally {
        commit('SET_LOADING', false)
      }
    }
  },

  getters: {
    packages: (state) => state.packages,
    isLoading: (state) => state.isLoading,
    error: (state) => state.error
  }
})
