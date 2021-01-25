<template>
  <div id="section-container">
    <div class="text-section"></div>
    <div class="slogan">
      <h1>Let's save the <span>planet</span> together</h1>
    </div>
    <div class="information">
      <p>
        Calculate your <span>carbon</span> footprint and learn how to reduce it
        without much effort
      </p>
    </div>
    <div class="call_to_action">
      <button class="button" onClick="document.getElementById('question').scrollIntoView();">save the planet</button>
    </div>
    <div class="background"></div>
  </div>
</template>

<script>
export default {
  name: "Landing",
  data: function() {
    return {
      childVisible: true,
    }
  },
}
</script>

<style scoped>
#section-container {
  font-family: "Nunito", sans-serif;
  text-shadow: .8px .8px .8px black, .8px -.8px .8px black, -.8px .8px .8px black,
    -.8px -.8px .8px black;
  font-weight: 600;

  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  display: grid;
  height: 100vh;
  width: 100vw;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: repeat(12, 1fr);
}

.slogan {
  grid-column: 2/5;
  grid-row: 5/7;
  line-height: 3.5em;
}

.slogan h1 {
  padding: 0;
  margin: 0;
  text-decoration: none;
  color: #edecda;
  font-size: 4em;
  transition: all 0.5s;
}

.slogan span {
  padding: 0;
  margin: 0;
  text-decoration: none;
  color: #1a9414;
  transition: all 0.5s;
}

.information {
  grid-column: 2/5;
  grid-row: 9/10;
}

.information p {
  padding: 10px;
  margin: 0;
  text-decoration: none;
  color: #edecda;
  font-size: 1.4em;
  transition: all 0.5s;
}

.information span {
  color: #b8283f;
}

.call_to_action {
  grid-column: 2/5;
  grid-row: 11/12;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}

.button {
  padding: 10px 20px;
  font-size: 1.2em;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  outline: none;
  color: #edecda;
  background-color: #1a9414;
  border: none;
  border-radius: 20px;
}

.text-section {
  grid-column: 1/6;
  grid-row: 1/13;

  background-color: #231f20;
}

.background {
  grid-column: 6/13;
  grid-row: 1/13;

  background-image: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.3),
      rgba(35, 31, 32, 0.5),
      rgba(35, 31, 32, 0.5),
      rgba(35, 31, 32, 0.5),
      rgba(35, 31, 32, 1)
    ),
    url("../assets/background.jpg");
  background-size: cover;
}

@media only screen and (max-width: 1175px) {
  #section-container {
    display: flex;
    flex-flow: column;

    flex-basis: 100%;
    justify-content: space-evenly;
    align-items: center;
    text-align: center;

     background-image: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.3),
      rgba(35, 31, 32, 0.5),
      rgba(35, 31, 32, 0.5),
      rgba(35, 31, 32, 0.5),
      rgba(35, 31, 32, 1)
    ),
    url("../assets/background.jpg");
  background-size: cover;
  }

  .slogan{
    margin-top:20%;
  }

  .text-section {
    display: none;
  }
  .background {
    display: none;
  }
}
</style>
