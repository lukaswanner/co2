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
    co2list_bar: [
      {
        category: "2050 Goal",
        value: 1500,
        id: "1",
        color: "#27B320",
      },

      {
        category: "Your Co2",
        value: 0,
        id: "1",
        color: "#b8283f",
      },

      {
        category: "Power",
        value: 0,
        id: "2",
        color: "#D1AC00",
      },
      {
        category: "Transport",
        value: 0,
        id: "3",
        color: "#004643",
      },
      {
        category: "Consumption",
        value: 0,
        id: "4",
        color: "#219ebc",
      },
    ],
    steps: [],
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
    addToCategory(state, payload) {
      let list = state.co2list_bar
      list.forEach((item) => {
        if (item.category === payload.category) {
          item.value += payload.value
        }
      })
      state.co2list_bar[1].value += payload.value
      state.steps.push({ category: payload.category, value: payload.value })
      state.steps.push({ category: "Your Co2", value: payload.value })
      console.log(state.steps)
    },
    substractFromCategory(state, payload) {
      let list = state.co2list_bar
      list.forEach((item) => {
        if (item.category === payload.category) {
          item.value -= payload.value
        }
      })
      state.co2list_bar[1].value -= payload.value
      state.steps.pop()
      state.steps.pop()
    },
    add(state, payload) {
      let list = state.co2list_bar
      list.forEach((item) => {
        if (item.category === payload.category) {
          item.value += payload.value
        }
      })
      state.co2list_bar[1].value += payload.value
      state.steps[state.steps.length-1].value += payload.value
      state.steps[state.steps.length-2].value += payload.value
      
    },
    substract(state, payload) {
      let list = state.co2list_bar
      list.forEach((item) => {
        if (item.category === payload.category) {
          item.value -= payload.value
        }
      })
      state.co2list_bar[1].value -= payload.value
      state.steps[state.steps.length-1].value -= payload.value
      state.steps[state.steps.length-2].value -= payload.value
    },
    goBack(state) {
      if (state.steps.length >= 2) {
        const b1 = state.steps.pop()
        const b2 = state.steps.pop()
        let list = state.co2list_bar
        list.forEach((item) => {
          if (item.category === b1.category) {
            item.value -= b1.value
          } else if (item.category === b2.category) {
            item.value -= b2.value
          }
        })
      }
    },
  },
})

export default store
