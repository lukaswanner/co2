<template>
  <div id="app">
    <div class="svg_wrapper">
      <foot/>
    </div>
    <div class="testing">
    <BarChart class="chart"/>
    </div>
  </div>
</template>

<script>
//todo nach emit sollen die anderen invis sein und size von dem geclicketen soll dann 100% sein
import foot from "./components/co2foot.vue"
import BarChart from "./components/barchart.vue"
export default {
  name: "App",
  components: {
    foot,
    BarChart,
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
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

* {
  margin: 0px;
}

.svg_wrapper{
  width: 45vh;
}
.chart {
    margin: 120px auto;
    display: block;
  }
.testing{
  margin-left: 10%;
  width: 300px;
  height: 300px;
}
</style>
