<template>
  <div id="app-container">
    <div id="navbar"><navbar /></div>
    <div id="landing"> <Landing_Page/></div>
    <div id="landing2"><Questions/></div>
  </div>
</template>

<script>
//todo nach emit sollen die anderen invis sein und size von dem geclicketen soll dann 100% sein
// import foot from "./components/co2foot.vue"
// import BarChart from "./components/barchart.vue"
import navbar from "./components/navbar.vue"
import Landing_Page from "./components/landing_page.vue"
import Questions from "./components/question_page.vue"

//allgemeines js

export default {
  name: "App",
  components: {
    // foot,
    // BarChart,
    Landing_Page,
    navbar,
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
  height: 100%;
  width: 100%;
  overflow-x: hidden;
  background-color:#231F20
}

#app-container {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  display: grid;
  height: 100vh;
  width: 100vw;
  background-color: rgb(254, 254, 254);
  grid-template-columns: 1fr 1fr;
}

#navbar {
  grid-column-start: 1;
  grid-column-end: 3;
  grid-row-start:1 ;
  z-index: 1;
  height: 10vh;
}

#landing {
  grid-column-start: 1;
  grid-column-end: 3;
  grid-row-start: 1;
  grid-row-end: auto;
  height: 100vh;
}

#landing2 {
  grid-column-start: 1;
  grid-column-end: 3;
  height: 100vh;
}

body::-webkit-scrollbar {
  width: 0.5rem;
}

body::-webkit-scrollbar-track {
  background: #1e1e24;
}

body::-webkit-scrollbar-thumb {
  background:  #b8283f;
}
</style>
