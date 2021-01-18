<template>
  <div id="section-container">
    <h1 class="save_earth">save our earth</h1>
    <div class="question_card">
      <img class="car" :src="this.src" alt="" />
      <h1>{{ this.question }}</h1>
      <div class="questions">
        <div class="call_to_action_q1">
          <button class="button" @click="toggle($event)">{{ a1 }}</button>
        </div>
        <div class="call_to_action_q2">
          <button class="button" @click="toggle($event)">{{ a2 }}</button>
        </div>
        <div class="call_to_action_q3">
          <button class="button" @click="toggle($event)">{{ a3 }}</button>
        </div>
      </div>
    </div>
    <div class="graph_card">
      <BarChart class="graph" />
    </div>
    <div class="arrows">
      <i
        id="backarrow"
        class="fas fa-angle-double-right"
        @click="shiftCards(false)"
      ></i>
      <i
        id="arrow"
        class="fas fa-angle-double-right"
        @click="shiftCards(true)"
      ></i>
    </div>
  </div>
</template>

<script>
//todo wenn gedrückt dann wird er wert ausm json an die co2 liste hinzugefügt
//hier gibt es einen gesammt wert und einen wert pro category
//somit kann dann pro category jeweils der prozentsatz berechnet werden
import BarChart from "./barchart.vue"

export default {
  name: "Questions",
  components: {
    BarChart,
  },
  data: function() {
    return {
      img_src: require("@/assets/car.svg"),
      index: 0,
    }
  },
  mounted() {
    console.log(require("@/assets/questions/questions.json").questions)
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
    shiftCards: function(bool) {
      let card = document.getElementsByClassName("question_card")[0]
      if (bool) {
        card.addEventListener("transitionend", this.shiftForwards)
      } else {
        card.addEventListener("transitionend", this.shiftBackwards)
      }
      card.style.transition = "0.7s ease-in-out"
      card.style.opacity = 0
    },
    shiftForwards: function() {
      document
        .getElementsByClassName("question_card")[0]
        .removeEventListener("transitionend", this.shiftForwards)
      let buttons = document.getElementsByClassName("questions")[0].children
      buttons.forEach((button) => {
        button.firstChild.classList.remove("active")
      })
      document.getElementsByClassName("question_card")[0].style.opacity = 1
      // prettier-ignore
      if (this.index + 1 <require("@/assets/questions/questions.json").questions.length) {
        this.index += 1
      }else{
          this.index = 0
      }
    },
    shiftBackwards: function() {
      document
        .getElementsByClassName("question_card")[0]
        .removeEventListener("transitionend", this.shiftBackwards)
      let buttons = document.getElementsByClassName("questions")[0].children
      buttons.forEach((button) => {
        button.firstChild.classList.remove("active")
      })
      document.getElementsByClassName("question_card")[0].style.opacity = 1
      // prettier-ignore
      if (this.index - 1  >= 0) {
        this.index -= 1
      }else{
          this.index = 0
      }
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
    question() {
      return require("@/assets/questions/questions.json").questions[this.index]
        .Q
    },
    a1() {
      return require("@/assets/questions/questions.json").questions[this.index]
        .A1[0]
    },
    a2() {
      return require("@/assets/questions/questions.json").questions[this.index]
        .A2[0]
    },
    a3() {
      return require("@/assets/questions/questions.json").questions[this.index]
        .A3[0]
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
  transition: 5s ease-in-out;
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
  text-align: center;
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

.active {
  background-color: #1a9414;
}

.graph {
  grid-column-start: 2;
  grid-column-end: 13;

  grid-row-start: 1;
  grid-row-end: 12;
}

.arrows {
  grid-column-start: 3;
  grid-column-end: 6;

  grid-row: auto;
  display: flex;
  flex-flow: row;
  justify-content: space-between;
}

#arrow {
  font-size: 3.5em;
  color: #1a9414;

  justify-self: center;
  align-self: center;

  cursor: pointer;
  margin-bottom: 5%;
}

#backarrow {
  font-size: 3.5em;
  color: #b8283f;

  justify-self: center;
  align-self: center;
  transform: rotate(180deg);
  cursor: pointer;
  margin-bottom: 5%;
}

#arrow:active {
  transform: scale(0.9, 0.9);
}

#backarrow:active {
  transform: rotate(180deg) scale(0.9, 0.9);
}

@media only screen and (max-width: 1300px) {
  #section-container {
    grid-template-columns: auto;
    grid-template-rows: auto;
    grid-template-areas:
      "save_earth"
      "questions"
      "arrow"
      "graph";
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

  .arrows {
    grid-area: arrow;
    justify-content: center;
  }

  .arrows > * {
    padding-left: 5%;
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
