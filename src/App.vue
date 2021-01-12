<template>
  <div id="app-container">
    <div class="navbar"><navbar /></div>
    <div class="illustration"></div>
    <div class="main"><img src="./assets/Ecology_Isometric.svg" /></div>
    <div class="slogan">
      <p>Hi,</p>
      <h1>Let's save the planet <span>together</span></h1>
    </div>
  </div>
</template>

<script>
//todo nach emit sollen die anderen invis sein und size von dem geclicketen soll dann 100% sein
// import foot from "./components/co2foot.vue"
// import BarChart from "./components/barchart.vue"
import navbar from "./components/navbar.vue"
export default {
  name: "App",
  components: {
    // foot,
    // BarChart,
    navbar,
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
}

#app-container {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  display: grid;
  height: 100%;
  max-width: 100%;
  background-color: #eee8a9;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 2.5fr 6fr;
}

.navbar {
  grid-column-start: 1;
  grid-column-end: 3;
  grid-row-start: 1;
  grid-row-end: 2;
  z-index: 1;
}

.slogan {
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 2;
  grid-row-end: 3;
  padding: 10px;
}

.slogan p {
  text-decoration: none;
  color: #525ca3;
  font-size: 2em;
  font-weight: 600;
  transition: all 0.5s ease-in-out;
  text-transform: uppercase;
}

.slogan h1 {
  padding: 0;
  margin: 0;
  text-decoration: none;
  color: #525ca3;
  font-size: 4em;
  font-weight: 600;
  transition: all 0.5s ease-in-out;
  text-transform: uppercase;
}

.slogan span {
  padding: 0;
  margin: 0;
  text-decoration: none;
  color: #b8283f;
  font-weight: 600;
  transition: all 0.5s ease-in-out;
  text-transform: uppercase;
}

.main {
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 3;
  grid-row-end: 4;
  display: flex;
  align-items: center;
  justify-content: center;
}

.illustration {
  grid-column-start: 2;
  grid-column-end: 3;
  grid-row-start: 1;
  grid-row-end: 4;
  background-image: url("./assets/save_the_planet.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position-y: 50%;
}

@media only screen and (max-width: 600px) {
  #app-container {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(auto-fill, minmax(100px, 1fr));
  }
  .slogan {
    grid-column: 1 / 2;
    grid-row: 2/4;
  }
  .main {
    grid-column: 1 / 2;
    grid-row: 6/9;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>
