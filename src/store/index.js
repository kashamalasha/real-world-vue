import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: { id: "1", name: "Katya" },
    categories: ["Еда", "Товары для дома", "Автотовары"],
    todos: [
      { id: 1, text: "test", done: true },
      { id: 2, text: "test2", done: false },
      { id: 3, text: "test3", done: true }
    ]
  },
  mutations: {},
  actions: {},
  modules: {},
  getters: {
    catLength: state => {
      return state.categories.length;
    }
  }
});
