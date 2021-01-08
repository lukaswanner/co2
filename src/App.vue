<template>
  <div id="app">
    <FootPrint
      co2_category="konsum"
      color="green"
      :img_x="50"
      :img_y="50"
      :img_width="100"
      :img_heigth="50"
    />
    <!-- <FootPrint
      co2_category="essen"
      color="black"
      :img_x="50"
      :img_y="100"
      :img_width="100"
      :img_heigth="50"
    />
    <FootPrint
      co2_category="auto"
      color="red"
      :img_x="50"
      :img_y="150"
      :img_width="100"
      :img_heigth="50"
    /> -->
    <svg-footprint
      co2_category="konsum"
      color="green"
      :img_x="50"
      :img_y="-100"
      :img_width="100"
      :img_heigth="100"
    />
  </div>
</template>

<script>
import FootPrint from "./components/footprint.vue"
import svgFootprint from "./components/svgfootprint.vue"

export default {
  name: "App",
  components: {
    FootPrint,
    svgFootprint,
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
