import axios from 'axios'
import { createStore } from 'vuex'

export default createStore({
  state: {
    users: []
  },
  getters: {
  },
  mutations: {
    setUsers(state, usersFromServer) {
      state.users = usersFromServer
    }
  },
  actions: {
    async fetchUsers({ commit }) {
      const res = await axios.get("https://jsonplaceholder.typicode.com/users?_limit=10")
      commit('setUsers', res.data)
    }
  },
  modules: {
  }
})
