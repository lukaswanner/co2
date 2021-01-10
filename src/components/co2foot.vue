<template>
  <div class="wrapper">

    <h1> Your Co2 Footprint </h1>

    <svg viewBox="0 0 1200 1200">
      <defs>
        <linearGradient id="half" x1="0" y1="0" x2="0" y2="1">
          <stop
            v-for="items in co2list"
            :key="items.id"
            :offset="items.percent"
            :stop-color="items.color"
          />
          <animate
            id="filling"
            restart="whenNotActive"
            attributeName="y2"
            dur="2s"
            from="0%"
            to="100%"
          />
        </linearGradient>
        <linearGradient id="text" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-opacity="1" stop-color="black" />
          <stop offset="100%" stop-opacity="1" stop-color="black" />
          <stop offset="100%" stop-opacity="0" stop-color="black" />
          <animate
            id="text_filling"
            attributeName="y2"
            dur="2s"
            from="0%"
            to="100%"
          />
        </linearGradient>
      </defs>
      <g
        id="feet"
        fill="url(#half)"
        stroke="black"
        stroke-width="5"
        text-anchor="middle"
        alignment-baseline="middle"
        transform="translate(10,10)"
      >
        <path
          d="M19.6 242C-7.49999 252.9 -5.89999 297.5 22.7 325.2C34.4 336.5 46 341.6 58.9 340.8C68 340.2 72.9 338 78.7 331.8C84.6 325.3 87.3 317.6 87.4 306.5C87.5 295.9 86 289.2 81.4 279.2C74.2 263.4 63.3 251.8 49.2 244.8C41.9 241.1 40 240.6 32.7 240.3C26.3 240 23.4 240.4 19.6 242Z M371.4 207C306 212.9 227.3 241.1 170 279.3C122.5 311 94.2 343.1 79.7 382C69 410.8 67.4 437.6 74.6 466.8C80.8 491.8 91.4 512 118.4 549.4C131 566.9 131.7 568.3 141 591.6C157.9 633.8 171.8 675.6 189.9 739C202.4 782.9 206.2 801 219.6 881.5C238 992.1 246 1029.9 257 1057.6C281.2 1118.4 346.1 1175.1 406 1187.6C417.6 1190 435.1 1189.8 450.1 1187.1C488.6 1180.3 516.4 1163.1 536.6 1133.4C557 1103.7 565.3 1070.5 565.3 1019.5C565.3 970.3 560.3 950 527.7 866.5C502 800.7 499.9 793.1 495.6 751C492.6 722.3 491.7 704 491.7 673C491.6 641 492.5 625.8 496.1 598C498.7 577.5 500.7 568.2 509 539C521.8 494.1 525.1 475.2 530 420C531.8 400 533.1 361 532.5 346.5C531 311.3 526.8 288.7 518.5 271.3C508.1 249.2 494 236.4 464.3 222C449.6 214.8 438 210.8 425 208.6C413.9 206.6 384.7 205.8 371.4 207Z M96.4 159.7C81.8 166 72.8 180.4 71.3 200.1C69.2 227 84.6 259.1 106.5 273.2C122.9 283.9 141 283.4 153.5 271.9C159.1 266.7 162.1 261.8 165.2 252.5C167.1 246.6 167.5 243.5 167.4 233C167.3 222.5 166.9 219.1 164.6 211.7C157.5 188 143.5 170.3 125.3 161.8C119.5 159 117.2 158.5 109.5 158.3C102.7 158.1 99.5 158.4 96.4 159.7Z M188.8 95.8999C181.7 98.7999 177.5 101.6 172.6 107.1C154.1 127.7 153.2 167.9 170.7 199C176.7 209.6 188.9 222.2 197.6 226.8C201 228.5 206.6 230.7 210.1 231.6C231.8 237.2 252.3 222 259.6 195C261.9 186.4 262 165.4 259.7 155.2C253.9 129.9 238 107.3 219.6 98.4999C212.6 95.0999 210.6 94.6999 202.6 94.2999C195.4 93.9999 192.5 94.2999 188.8 95.8999Z M307.8 48.9999C290.5 51.8999 275.5 68.2999 269.3 90.9999C266.7 100.5 266.7 128.7 269.4 138.5C275.6 161.3 288.6 179.2 304.7 187.2C311 190.3 312.1 190.5 321.5 190.5C330.8 190.5 332 190.3 338.2 187.2C355.8 178.6 367.4 156.7 368.7 130C370.9 83.6999 340.7 43.4999 307.8 48.9999Z M440.6 1.5999C419.9 6.5999 401.1 25.0999 390.9 50.5999C373.7 93.5999 380.6 146.5 407.5 177.8C414.5 186 420.2 190.5 429.5 195.1C462.9 211.6 500.2 190.4 516.3 145.5C521.7 130.3 523.3 120 523.3 100.5C523.3 81.0999 521.7 70.7999 516.3 55.4999C502.2 16.1999 471.3 -5.8001 440.6 1.5999Z"
          @click="clicked($event)"
        />
      </g>
      <g fill="url(#text)">
        <text
          v-for="items in textlist"
          :key="items[1]"
          x="50%"
          :y="items[1]"
          class="small"
        >
          {{ items[0] }}
        </text>
      </g>
    </svg>
  </div>
</template>

<script>
import store from "../Store/data.js"
export default {
  name: "foot",

  data: function() {
    return {}
  },
  computed: {
    co2list() {
      return store.state.co2list
    },
    textlist() {
      const result = []
      let percent
      for (let i = 1; i < this.co2list.length - 1; i += 2) {
        percent =
          (parseInt(this.co2list[i].percent) +
            parseInt(this.co2list[i - 1].percent)) /
          2
        result.push([this.co2list[i].category, percent.toString() + "%"])
      }
      return result
    },
  },

  methods: {
    clicked: function(event) {
      let height = event.offsetY / 800
      let index = 0
      this.co2list.forEach((element) => {
        if (height > parseInt(element.percent) / 100) {
          index++
        }
      })
      console.log(this.co2list[index].color)
      let list = [
        {
          color: "#5e60ce",
          percent: "0%",
          id: "1",
          category: "transport",
        },
        {
          color: "#5e60ce",
          percent: "20%",
          id: "2",
          category: "transport",
        },
        {
          color: "#5390d9",
          percent: "20%",
          id: "22",
          category: "essen",
        },
        {
          color: "#5390d9",
          percent: "40%",
          id: "23",
          category: "essen",
        },
        {
          color: "#48bfe3",
          percent: "40%",
          id: "3",
          category: "strom",
        },
        {
          color: "#48bfe3",
          percent: "60%",
          id: "4",
          category: "strom",
        },
        {
          color: "#64dfdf",
          percent: "60%",
          id: "5",
          category: "konsum",
        },
        {
          color: "#64dfdf",
          percent: "100%",
          id: "6",
          category: "konsum",
        },
        {
          color: "white",
          percent: "100%",
          id: "7",
          category: "fill",
        },
      ]
      if (!store.state.detailed) {
        store.commit("setCo2List", list)
        document.getElementById("filling").beginElement()
        document.getElementById("text_filling").beginElement()
        console.log(this.textlist)
      } else if (store.state.detailed) {
        store.commit("loadInitialState")
        document.getElementById("filling").beginElement()
        document.getElementById("text_filling").beginElement()
      }
    },

    clicked2: function(event) {
      console.log(event)
    },
  },
}
</script>

<style>

.wrapper {
  max-width: 600px;
  min-height: 100vh;
  display: block;
  text-align: center;
  background-color: #fff1e6;
}
svg {
  text-transform: uppercase;
}

body{
  background-color: #fff1e6;
}

#feet {
  cursor: pointer;
}

.small {
  font: italic bold 40px sans-serif;
}
</style>
