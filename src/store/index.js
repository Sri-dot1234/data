import { createStore } from "vuex";
import axios from 'axios'

const url = "https://keapfirebase-default-rtdb.firebaseio.com/post.json"
export default createStore({
  state: {

    post: [],
    data: []
  },
  mutations: {
    setmuttation(state, form_data) {
      state.post.push(form_data)
    },
    getmuttation(state, data) {
      state.data = data;

    },

  },
  actions: {

    async PostData({ commit }, form_data) {
      axios.post(url, form_data)
      commit('setmuttation', form_data)
    },
    async FetchData({ commit }) {
      const res = await axios.get(url);
      //console.log(res.data)
      commit("getmuttation", res.data)
    },
  },
  getters: {

  }

})