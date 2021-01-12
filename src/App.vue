<template>
  <div id="app-container">
    <div class="navbar"><navbar /></div>
    <div class="landing"><Landing /></div>
    <div class="landing2"><Landing /></div>
  </div>
</template>

<script>
//todo nach emit sollen die anderen invis sein und size von dem geclicketen soll dann 100% sein
// import foot from "./components/co2foot.vue"
// import BarChart from "./components/barchart.vue"
import navbar from "./components/navbar.vue"
import Landing from "./components/landing_section.vue"

export default {
  name: "App",
  components: {
    // foot,
    // BarChart,
    navbar,
    Landing,
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
}

#app-container {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  display: grid;
  height: 100vh;
  width: 100vw;
  background-color: #eee8a9;
  grid-template-columns: 1fr 1fr;
}

.navbar {
  grid-column-start: 1;
  grid-column-end: 3;
  z-index: 1;
  height: 10vh;
}

.landing {
  grid-column-start: 1;
  grid-column-end: 3;
  height: 90vh;
}

.landing2 {
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
  background: #6649b8;
}
</style>
