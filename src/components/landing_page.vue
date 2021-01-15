<template>
  <div id="section-container">
    <div class="slogan">
      <p>Hi,</p>
      <h1>Let's save the <span>planet</span></h1>
    </div>
    <div class="call_to_action">
      <button class="button">save the planet</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Landing_Page",
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
  text-shadow: 1px 1px 1px black, 1px -1px 1px black, -1px 1px 1px black,
    -1px -1px 1px black;
  font-weight: 600;

  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  display: grid;
  height: 100%;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: repeat(12, 1fr);

  background-image: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.4),
      rgba(0, 0, 0, 0.4)
    ),
    url("../assets/background.jpg");
  background-size: cover;
}

.slogan {
  grid-column-start: 4;
  grid-column-end: 11;
  grid-row-start: 6;
  grid-row-end: 7;
}

.slogan p {
  text-decoration: none;
  color: #edecda;
  font-size: 2em;
  transition: all 0.5s ease-in-out;
  text-transform: uppercase;
}

.slogan h1 {
  padding: 0;
  margin: 0;
  text-decoration: none;
  color: #edecda;
  font-size: 6em;
  transition: all 0.5s;
}

.slogan span {
  padding: 0;
  margin: 0;
  text-decoration: none;
  color: #1a9414;
  transition: all 0.5s;
}

.call_to_action {
  grid-column-start: 5;
  grid-column-end: 8;
  grid-row-start: 9;
  grid-row-end: 10;
  display: flex;
  justify-content: center;
  align-items: center;
}

.button {
  padding: 15px 25px;
  font-size: 24px;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  outline: none;
  color: #edecda;
  background-color: #1a9414;
  border: none;
  border-radius: 15px;
}
</style>
