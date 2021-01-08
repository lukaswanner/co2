<template>
  <div id="app">
    <svgfoot
      co2_category="Konsum"
      color="green"
      :svg_heigth="100"
      :img_y="0"
    />
    <svgfoot
      co2_category="Auto"
      color="red"
      :svg_heigth="100"
      :img_y="100"
    />
    <svgfoot
      co2_category="Strom"
      color="blue"
      :svg_heigth="100"
      :img_y="200"
    />
    <svgfoot
      co2_category="Strom"
      color="pink"
      :svg_heigth="700"
      :img_y="300"
      v-on:test="childHide"
      v-if="childVisible"
    />
  </div>
</template>



<script>

//todo nach emit sollen die anderen invis sein und size von dem geclicketen soll dann 100% sein
import svgfoot from "./components/svgfootprint.vue"
export default {
  name: "App",
  components: {
    svgfoot,
  },
  data: function() {
    return {
      childVisible: true
    }
  },
   methods: {
    childHide () {
      console.log("test")
    },
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
