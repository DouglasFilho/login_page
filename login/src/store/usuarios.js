export default {
  namespaced: true,
  state: {
    users: [
      { email: 'teste@gmail.com', password: '123456' },
    ],
  },
  mutations: {

  },
  actions: {

  },
  getters: {
    getTeste(state) {
      return state.users;
    },
  },
}