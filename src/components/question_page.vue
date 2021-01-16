<template>
  <div id="section-container">
    <h1 class="save_earth">save our earth</h1>
    <div class="question_card">
      <img class="car" :src="this.src" alt="" />
      <h1>{{ this.question }}</h1>
      <div class="questions">
        <div class="call_to_action_q1">
          <button class="button" @click="toggle($event)">&#62; 100km</button>
        </div>
        <div class="call_to_action_q2">
          <button class="button" @click="toggle($event)">&#62; 10.000km</button>
        </div>
        <div class="call_to_action_q3">
          <button class="button" @click="toggle($event)">&#60; 10.000km</button>
        </div>
      </div>
    </div>
    <div class="graph_card">
      <BarChart class="graph" />
    </div>
    <i id="arrow" class="fas fa-angle-double-right" @click="shiftCards()"></i>
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
      this.img_src = require("@/assets/car.svg")
      this.question = "This is question 2"
      let buttons = document.getElementsByClassName("questions")[0].children
      buttons.forEach((button) => {
        button.firstChild.classList.remove("active")
      })
      let card = document.getElementsByClassName("question_card")[0]
      card.style.opacity = 1
    },
    toggle: function(event) {
      let buttons = event.currentTarget.parentElement.parentElement.children
      buttons.forEach((button) => {
        button.firstChild.classList.remove("active")
      })
      event.currentTarget.classList.add("active")
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
  min-height: 100vh;
  background-color: #231f20;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: auto;
}

.save_earth {
  grid-column-start: 2;
  grid-column-end: 13;

  grid-row: auto;
  width: 100%;
  margin-bottom: 4%;
  color: #ebebeb;
  font-size: 14em;
  word-spacing: 0.2em;
  opacity: 1;
  text-align: center;
  transition: 4s ease-in-out;
}

.question_card {
  grid-column-start: 2;
  grid-column-end: 7;

  grid-row: auto;

  margin: 0px;

  height: 100%;
  width: 100%;

  display: flex;
  flex-flow: column;
}

.graph_card {
  grid-column-start: 8;
  grid-column-end: 12;

  grid-row: auto;

  margin: 0px;

  height: 100%;
  width: 100%;

  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: repeat(10, 1fr);
}

.car {
  height: 15%;
  justify-self: flex-start;
  align-self: center;
  margin-top: 15%;
}

.questions {
  justify-self: flex-end;
  align-self: center;
  width: 80%;
  margin-top: 15%;
  display: flex;
  justify-content: space-around;
  flex-direction: row;
}

.question_card h1 {
  justify-self: center;
  align-self: center;
  font-size: 3em;
  color: #ebebeb;
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
  transition: 0.3s ease-in-out;
  border: none;
  border-radius: 15px;
}

.button:hover {
  background-color: #1a9414;
}

.active {
  background-color: #1a9414;
}

.graph {
  grid-column-start: 2;
  grid-column-end: 13;

  grid-row-start: 1;
  grid-row-end: 12;
}

#arrow {
  font-size: 3.5em;
  color: #b8283f;
  grid-column-start: 6;
  grid-column-end: 7;

  grid-row: auto;
  transition: 0.5s ease-in-out;
  justify-self: center;
  align-self: center;

  cursor: pointer;
}

#arrow:hover {
  color: #1a9414;
}

@media only screen and (max-width: 1300px) {
  #section-container {
    grid-template-columns: auto;
    grid-template-rows: auto;
    grid-template-areas:
      "save_earth"
      "questions"
      "graph"
      "arrow";
  }

  .save_earth {
    grid-area: save_earth;
  }

  .question_card {
    grid-area: questions;
  }

  .graph_card {
    grid-area: graph;
  }

  #arrow {
    grid-area: arrow;
  }
}

@media only screen and (max-width: 600px) {
  .question_card h1 {
    transition: 1s ease-in-out;
    font-size: 1.5em;
  }

  .questions {
    transition: 1s ease-in-out;
    font-size: 0.8em;
  }
}

@media only screen and (max-width: 1668px) {
  .save_earth {
    font-size: 9em;
  }
}

@media only screen and (max-width: 980px) {
  .save_earth {
    font-size: 7em;
  }
}

@media only screen and (max-width: 980px) {
  .save_earth {
    font-size: 6em;
  }
}

@media only screen and (max-width: 660px) {
  .save_earth {
    font-size: 5em;
  }
}
</style>
