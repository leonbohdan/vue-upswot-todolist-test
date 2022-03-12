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
    authorizedUser: false,
    todos: [
      {
        name: "TodoName",
        body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, aperiam!",
      },
      {
        name: "TodoName2",
        body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, aperiam!",
      },
      {
        name: "TodoName3",
        body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, aperiam!",
      },
    ],
  },
  getters: {
    isEqualData(state) {
      return (
        state.user.username === state.loginData.username &&
        state.user.password === state.loginData.password
      );
    },
    getUser(state) {
      return state.user;
    },
    isAuthorizedUser(state) {
      return state.authorizedUser;
    },
    getTodos(state) {
      return state.todos;
    },
  },
  mutations: {
    INITIALISE_LOGINED_USER(state) {
      if (localStorage.getItem("loginedUser")) {
        let logined = localStorage.getItem("loginedUser");

        if (logined) {
          state.authorizedUser = true;
        }
      }
    },
    CHANGE_AUTHORIZED_STATUS(state) {
      state.authorizedUser = true;

      localStorage.setItem("loginedUser", true);
    },
    LOGOUT_USER_STATUS(state) {
      state.authorizedUser = false;

      localStorage.setItem("loginedUser", JSON.stringify(state.authorizedUser));
    },
  },
  actions: {
    initializeLoginedUser({ commit }) {
      commit("INITIALISE_LOGINED_USER");
    },
    changeAuthorizedStatus({ commit }) {
      commit("CHANGE_AUTHORIZED_STATUS");
    },
    logOutStatus({ commit }) {
      commit("LOGOUT_USER_STATUS");
    },
  },
  modules: {},
});
