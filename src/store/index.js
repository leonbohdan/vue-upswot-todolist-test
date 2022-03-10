import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: {
      username: "Admin",
      password: "12345",
    },
    loginData: {
      username: "",
      password: "",
    },
  },
  getters: {
    isLoginedUser(state) {
      return (
        state.user.username === state.loginData.username &&
        state.user.username === state.loginData.username
      );
    },
  },
  mutations: {},
  actions: {},
  modules: {},
});
