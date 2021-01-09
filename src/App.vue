<template>
  <div id="app">
    <foot/>
  </div>
</template>



<script>

//todo nach emit sollen die anderen invis sein und size von dem geclicketen soll dann 100% sein
import foot from "./components/co2foot.vue"
export default {
  name: "App",
  components: {
    foot,
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
