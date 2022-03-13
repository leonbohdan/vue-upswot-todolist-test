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
        id: 1,
        name: "TodoName",
        body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, aperiam!",
      },
      {
        id: 12,
        name: "TodoName2",
        body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, aperiam!",
      },
      {
        id: 13,
        name: "TodoName3",
        body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, aperiam!",
      },
    ],
  },
  getters: {
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
        let logined = JSON.parse(localStorage.getItem("loginedUser"));

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

      localStorage.setItem("loginedUser", false);
    },
    ADD_TODO(state, newTodo) {
      state.todos = [...state.todos, newTodo];
      console.log("ADD_TODO", newTodo);
    },
    REMOVE_TODO(state, id) {
      state.todos = state.todos.filter((todo) => todo.id !== id);
      console.log("REMOVE_TODO", id);
    },
    EDIT_TODO(state, todo) {
      console.log("EDIT_TODO", todo);
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
    addTodo({ commit }, newTodo) {
      commit("ADD_TODO", newTodo);
    },
    removeTodo({ commit }, id) {
      commit("REMOVE_TODO", id);
    },
    editTodo({ commit }, todo) {
      commit("EDIT_TODO", todo);
    },
  },
  modules: {},
});
