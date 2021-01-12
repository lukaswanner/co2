<template>
  <div id="section-container">
    <div class="illustration"></div>
    <div class="main"><img src="../assets/Ecology_Isometric.svg" /></div>
    <div class="slogan">
      <p>Hi,</p>
      <h1>Let's save the planet <span>together</span></h1>
    </div>
  </div>
</template>

<script>
export default {
  name: "Landing",
  components: {},
  data: function() {
    return {
      childVisible: true,
    }
  },
}
</script>

<style scoped>
#section-container {
  font-family: sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  display: grid;
  height: 100%;
  background-color: #eee8a9;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 50% 50%;
}

.slogan {
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 1;
  grid-row-end: 2;
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
  transition: all 0.5s;
  text-transform: uppercase;
}

.slogan span {
  padding: 0;
  margin: 0;
  text-decoration: none;
  color: #b8283f;
  font-weight: 600;
  transition: all 0.5s;
  text-transform: uppercase;
}

.main {
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 2;
  grid-row-end: 3;
  display: flex;
  align-items: center;
  justify-content: center;
}

.illustration {
  grid-column-start: 2;
  grid-column-end: 3;
  grid-row-start: 1;
  grid-row-end: 3;
  background-image: url("../assets/save_the_planet.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position-y: 50%;
}

@media only screen and (max-width: 900px) {
  #section-container {
    grid-template-columns: 1fr;
    grid-template-rows: 20%;
    grid-auto-rows: 40%;
  }

  .slogan {
    grid-column-start: 1;
    grid-column-end: 2;
    grid-row-start: 1;
    grid-row-end: 2;
    font-size: 1em;
    padding: 10px;
  }

  .slogan p {
    font-size: 1em;
  }

  .slogan h1 {
    font-size: 2em;
  }
  .main {
    grid-column-start: 1;
    grid-column-end: 2;
    grid-row-start: 2;
    grid-row-end: 3;
    height: 85%;
  }

  .illustration {
    grid-column-start: 1;
    grid-column-end: 2;
    grid-row-start: 3;
    grid-row-end: 4;
    background-image: url("../assets/save_the_planet.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    background-position-y: 50%;
  }
}
</style>
