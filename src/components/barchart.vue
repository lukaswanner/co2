<template>
  <div class="wrapper">
    <svg class="barchart" :width="width" :height="height">
      <g>
        <g class="bars" fill="none" transform="translate(100, 0)">
          <rect
            v-for="(bar, index) in data"
            :fill="bar[2]"
            :key="index"
            :height="barHeight + '%'"
            :width="barlen(index) + '%'"
            :x="x"
            :y="y(index) + '%'"
          ></rect>
        </g>
        <g class="y-grid" transform="translate(100, 0)">
          <line x1="0" x2="0" y1="0" :y2="height"></line>
        </g>
        <g class="y-grid-category" transform="translate(0, 0)">
          <text
            v-for="(bar, index) in data"
            :key="index"
            :x="0"
            :y="y(index) + barHeight / 2 + '%'"
            fill="#EBEBEB"
          >
            {{ bar[1] }}
          </text>
        </g>
        <g class="y-grid-percent" transform="translate(100, 0)">
          <text
            v-for="(bar, index) in data"
            :key="index"
            :x="barlen(index) - 2 + '%'"
            :y="y(index) + barHeight / 2 + '%'"
            fill="#EBEBEB"
          >
            {{ bar[0] }}%
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
      width: "100%",
      color: "brown",
    }
  },
  mounted() {},

  computed: {
    data() {
      const list = []
      for (let index = 1; index < store.state.co2list.length - 1; index += 2) {
        const percent =
          parseInt(store.state.co2list[index].percent) -
          parseInt(store.state.co2list[index - 1].percent)
        const category = store.state.co2list[index].category
        const color = store.state.co2list[index].color
        list.push([percent, category, color])
      }
      list.sort().reverse()
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
      return parseInt(this.width) * (this.data[index][0] / 100)
    },
  },
}
</script>

<style>
.wrapper{
  width: 100%;
  height: 100%;
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

line{
  stroke-width: 5px;
  stroke: #EBEBEB;
}
</style>
