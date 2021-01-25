<template>
  <div id="conclusion-container">
    <h1 class="thats-you">That's you</h1>
    <div class="foot-wrap">
      <foot />
      <foot />
    </div>
    <p>
      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
      eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
      voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
    </p>
  </div>
</template>

<script>
import foot from "../components/co2foot.vue"
export default {
  name: "Conclusion",
  components: {
    foot,
  },
}
</script>

<style scoped>
#conclusion-container {
  font-family: "Nunito", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  margin-top: 10%;

  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  min-height: 100vh;
  background-color: #231f20;
  background-image: linear-gradient(
      to bottom,
      rgba(35, 31, 32, 0.2),
      rgba(35, 31, 32, 0.2)
    ),
    url("../assets/path.jpg");
  background-size: cover;
}

.thats-you {
  grid-column: 4/8;
  grid-row: 1/3;
  align-self: center;
  font-size: 3em;
  color: #1a9414;
}

p {
  grid-column: 7/13;
  grid-row: 5/7;
  color: #ebebeb;
  line-height: 2em;
  padding: 5em;
}

.foot-wrap {
  flex: 1 1 50%;
  max-width: 40vh;
}
</style>
