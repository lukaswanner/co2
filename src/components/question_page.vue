<template>
  <div id="section-container">
    <h1 class="save_earth">save earth</h1>
    <div class="question_card">
      <img class="car" :src="this.src" alt="" />
      <h1>{{ this.question }}</h1>
      <div class="call_to_action_q1">
        <button class="button">&#62; 100km</button>
      </div>
      <div class="call_to_action_q2">
        <button class="button">&#62; 10.000km</button>
      </div>
      <div class="call_to_action_q3">
        <button class="button">&#60; 10.000km</button>
      </div>
    </div>
    <div class="graph_card">
      <BarChart class="graph" />
    </div>
    <i
      id="arrow"
      class="fas fa-angle-double-right"
      @click="shiftCards()"
    ></i>
  </div>
</template>

<script>
import BarChart from "./barchart.vue"

export default {
  name: "Questions",
  components: {
    BarChart,
  },
  data: function() {
    return {
      img_src: require("@/assets/car.svg"),
      question: "How far have you traveled by car?",
    }
  },
  mounted() {
    let options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.0,
    }
    function callbackFunc(entries) {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.transition = "3s ease-in-out"
          entry.target.style.opacity = 0.08
        } else {
          entry.target.style.transition = "1s"
          entry.target.style.opacity = 1
        }
      })
    }

    let observer = new IntersectionObserver(callbackFunc, options)
    observer.observe(document.getElementsByClassName("save_earth")[0])
  },
  methods: {
    shiftCards: function() {
      let card = document.getElementsByClassName("question_card")[0]
      card.addEventListener("transitionend", this.shiftBack)
      card.style.transition = "2s ease-in-out"
      card.style.opacity = 0
    },
    shiftBack: function() {
      this.img_src = require("@/assets/logo.svg")
      this.question = "Do you like me?"
      let card = document.getElementsByClassName("question_card")[0]
      card.style.opacity = 1
    },
  },
  computed: {
    src() {
      return this.img_src
    },
  },
}
</script>

<style scoped>
#section-container {
  font-family: "Nunito", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  margin-top: 10%;

  display: grid;
  height: 100%;
  background-color: #231f20;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: repeat(12, 1fr);
}

.save_earth {
  grid-column-start: 2;
  grid-column-end: 13;

  grid-row-start: 1;
  grid-row-end: 3;
  width: 100%;
  margin: 0;

  color: #ebebeb;
  font-size: 14em;
  word-spacing: 0.2em;
  opacity: 1;

  transition: 4s ease-in-out;
}

.question_card {
  grid-column-start: 2;
  grid-column-end: 7;

  grid-row-start: 4;
  grid-row-end: 11;

  height: 100%;
  width: 100%;
  border: 1px #ebebeb;
  border-style: solid;
  border-radius: 30px;

  display: grid;
  grid-template-columns: repeat(15, 1fr);
  grid-template-rows: repeat(12, 1fr);
}

.graph_card {
  grid-column-start: 8;
  grid-column-end: 12;

  grid-row-start: 4;
  grid-row-end: 11;

  height: 100%;
  width: 100%;
  border: 1px #ebebeb;
  border-style: solid;
  border-radius: 30px;

  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: repeat(12, 1fr);
}

.car {
  grid-column-start: 7;
  grid-column-end: 10;

  grid-row-start: 2;
  grid-row-end: 5;

  justify-self: center;
}
.question_card h1 {
  grid-column-start: 2;
  grid-column-end: 15;

  grid-row-start: 6;
  grid-row-end: 8;

  justify-self: center;

  color: #ebebeb;
  align-self: center;
}

.call_to_action_q1 {
  grid-column-start: 3;
  grid-column-end: 6;

  grid-row-start: 11;
  grid-row-end: 12;

  display: flex;
  justify-self: end;
  justify-content: center;
  align-items: center;
  min-width: 100%;
}

.call_to_action_q2 {
  grid-column-start: 7;
  grid-column-end: 10;

  grid-row-start: 11;
  grid-row-end: 12;

  display: flex;
  justify-self: end;
  justify-content: center;
  align-items: center;
  min-width: 100%;
}

.call_to_action_q3 {
  grid-column-start: 11;
  grid-column-end: 14;

  grid-row-start: 11;
  grid-row-end: 12;

  display: flex;
  justify-self: end;
  justify-content: center;
  align-items: center;
}

.button {
  padding: 10px 25px;
  white-space: nowrap;
  font-size: 1em;
  font-weight: 550;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  outline: none;
  color: #231f20;
  background-color: #ebebeb;
  transition: 0.5s ease-in-out;
  border: none;
  border-radius: 15px;
}

.button:hover {
  background-color: #1a9414;
}

.graph {
  grid-column-start: 2;
  grid-column-end: 10;

  grid-row-start: 2;
  grid-row-end: 12;
}

#arrow {
  font-size: 3.5em;
  color: #b8283f;
  grid-column-start: 7;
  grid-column-end: 8;

  grid-row-start: 12;
  grid-row-end: 13;
  justify-self: center;
  align-self: center;

  cursor: pointer;
}
</style>
