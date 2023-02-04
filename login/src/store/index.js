import { createStore } from 'vuex';

export default createStore({
  state: {
    users: [
      { email: '123@gmail.com', password: '123456' },
    ],
  },
  getters: {
    getUsers(state) {
      return state.users;
    },
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  },
});
