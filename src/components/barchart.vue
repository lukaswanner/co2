<template>
  <div class="wrapper">
    <svg class="barchart" :width="width" :height="height">
      <g>
        <g class="bars" fill="none" transform="translate(100, 0)">
          <rect
            v-for="(bar, index) in data"
            :fill="bar[3]"
            :key="index"
            :height="barHeight + '%'"
            :width="barlen(index) + '%'"
            :x="x"
            :y="y(index) + '%'"
            class="bar"
          ></rect>
        </g>
        <g class="y-grid" transform="translate(100, 0)">
          <line x1="0" x2="0" y1="5%" y2="90%"></line>
        </g>
        <g class="y-grid-category" transform="translate(0, 0)">
          <text
            v-for="(bar, index) in data"
            :key="index"
            :x="0"
            :y="y(index) + barHeight / 2 + '%'"
            fill="#EBEBEB"
          >
            {{ bar[2] }}
          </text>
        </g>
        <g class="y-grid-percent" transform="translate(150, 0)">
          <text
            v-for="(bar, index) in data"
            :key="index"
            :x="'0%'"
            :y="y(index) + barHeight / 2 + '%'"
            fill="#EBEBEB"
          >
            {{ bar[0] }}t
          </text>
        </g>
      </g>
    </svg>
  </div>
</template>

<script>
import store from "../Store/data.js"
export default {
  name: "BarChart",
  data() {
    return {
      height: "100%",
      width: "90%",
    }
  },
  mounted() {},

  computed: {
    data() {
      const list = []
      for (let index = 0; index < store.state.co2list_bar.length; index += 1) {
        const value = parseInt(store.state.co2list_bar[index].value)
        const category = store.state.co2list_bar[index].category
        const color = store.state.co2list_bar[index].color
        list.push([value, "0", category, color])
      }
      list.sort(function(a, b) {
        return b[0] - a[0]
      })
      for (let index = 0; index < list.length; index++) {
        let element = list[index]
        element[1] = parseInt((element[0] / list[0][0]) * 100)
      }
      return list
    },
    x() {
      return 0
    },
    barHeight() {
      return parseInt(this.height) / this.data.length / 2
    },
    barOffset() {
      return this.barHeight / 2
    },
  },
  methods: {
    y(index) {
      return index * (this.barHeight + this.barOffset) + this.barHeight
    },
    barlen(index) {
      return parseInt(this.width) * (this.data[index][1] / 100)
    },
  },
}
</script>

<style>
.bar {
  transition:4s ease, fill 0.2s;
}
.wrapper {
  min-height: 30vh;
}

text {
  font-family: "Nunito", sans-serif;
  font-size: 1em;
  font-weight: 500;
  dominant-baseline: middle;
}
.y-grid-percent {
  text-anchor: end;
}
.y-grid-category {
  text-anchor: start;
}

line {
  stroke-width: 5px;
  stroke: #ebebeb;
}
</style>
