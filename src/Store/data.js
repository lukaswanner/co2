import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    detailed: false,
    co2list: [
      {
        color: "royalblue",
        percent: "0%",
        id: "1",
        category: "transport",
      },
      {
        color: "royalblue",
        percent: "40%",
        id: "2",
        category: "transport",
      },
      {
        color: "red",
        percent: "40%",
        id: "3",
        category: "strom",
      },
      {
        color: "red",
        percent: "60%",
        id: "4",
        category: "strom",
      },
      {
        color: "green",
        percent: "60%",
        id: "5",
        category: "konsum",
      },
      {
        color: "green",
        percent: "100%",
        id: "6",
        category: "konsum",
      },
      {
        color: "white",
        percent: "100%",
        id: "7",
        category: "fill",
      },
    ],
    co2list_copy: [
      {
        color: "royalblue",
        percent: "0%",
        id: "1",
        category: "transport",
      },
      {
        color: "royalblue",
        percent: "40%",
        id: "2",
        category: "transport",
      },
      {
        color: "red",
        percent: "40%",
        id: "3",
        category: "strom",
      },
      {
        color: "red",
        percent: "60%",
        id: "4",
        category: "strom",
      },
      {
        color: "green",
        percent: "60%",
        id: "5",
        category: "konsum",
      },
      {
        color: "green",
        percent: "100%",
        id: "6",
        category: "konsum",
      },
      {
        color: "white",
        percent: "100%",
        id: "7",
        category: "fill",
      },
    ],
  },
  mutations: {
    setCo2List(state, list) {
      state.co2list = [...list]
      state.detailed = true
    },
    loadInitialState(state) {
      state.co2list = [...state.co2list_copy]
      state.detailed = false
    },
  },
})

export default store
