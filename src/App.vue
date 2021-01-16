<template>
  <div id="app-container">
    <div id="navbar"><navbar /></div>
    <div id="landing"><Landing/></div>
    <div id="info"><Info/></div>
    <div id="question"><Questions /></div>
  </div>
</template>

<script>
//todo nach emit sollen die anderen invis sein und size von dem geclicketen soll dann 100% sein
// import BarChart from "./components/barchart.vue"
import navbar from "./components/navbar.vue"
import Landing from "./components/landing_page.vue"
import Info from "./components/info_page.vue"
import Questions from "./components/question_page.vue"

//allgemeines js

export default {
  name: "App",
  components: {
    // BarChart,
    navbar,
    Landing,
    Info,
    Questions,
  },
  data: function() {
    return {
      childVisible: true,
    }
  },
  methods: {
    childHide() {
      console.log("test")
    },
  },
}
</script>

<style>
body {
  height: 100vh;
  width: 100vw;
  overflow-x: hidden;
  background-color: #231f20;
}

#app-container {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  display: flex;
  flex-flow: column;
  height: 100vh;
  width: 100vw;
  background-color: rgb(254, 254, 254);
}

#navbar {
  z-index: 1;
  height: 10vh;
}

body::-webkit-scrollbar {
  width: 0.5rem;
}

body::-webkit-scrollbar-track {
  background: #1e1e24;
}

body::-webkit-scrollbar-thumb {
  background: #b8283f;
}
</style>
