<template>
  <svg viewBox="0 0 1000 1000">
    <defs>
      <linearGradient id="half" x1="0" y1="0" x2="0" y2="1">
        <stop
          v-for="items in co2list"
          :key="items.id"
          :offset="items.percent"
          :stop-color="items.color"
        />
      </linearGradient>
    </defs>
    <g
      id="feet"
      fill="url(#half)"
      stroke="url(#half)"
      stroke-width="2"
      text-anchor="middle"
      alignment-baseline="middle"
      transform="translate(10,10)"
    >
      <path
        id="feetpath"
        fill-opacity="0"
        d="M17.1434 203.367C-6.83568 212.533 -5.41993 250.041 19.8865 273.336C30.2391 282.839 40.5032 287.128 51.9176 286.455C59.9697 285.951 64.3054 284.101 69.4374 278.886C74.658 273.42 77.047 266.945 77.1355 257.61C77.224 248.695 75.8968 243.061 71.8265 234.651C65.4557 221.364 55.8109 211.608 43.3347 205.722C36.8754 202.61 35.1942 202.189 28.7348 201.937C23.0719 201.685 20.5058 202.021 17.1434 203.367ZM328.43 173.933C270.561 178.894 200.924 202.61 150.223 234.735C108.193 261.394 83.1524 288.39 70.3223 321.104C60.8545 345.324 59.4387 367.862 65.8096 392.418C71.2956 413.443 80.6749 430.43 104.566 461.883C115.715 476.6 116.334 477.777 124.563 497.372C139.517 532.861 151.816 568.014 167.832 621.332C178.892 658.251 182.254 673.473 194.111 741.171C210.392 834.183 217.471 865.972 227.204 889.267C248.617 940.399 306.043 988.082 359.045 998.594C369.309 1000.61 384.794 1000.44 398.067 998.174C432.133 992.455 456.731 977.99 474.605 953.013C492.656 928.036 500 900.116 500 857.226C500 815.85 495.576 798.778 466.73 728.557C443.99 673.22 442.132 666.829 438.327 631.424C435.672 607.288 434.876 591.898 434.876 565.828C434.787 538.916 435.584 526.134 438.769 502.754C441.07 485.514 442.839 477.693 450.184 453.137C461.51 415.377 464.43 399.483 468.765 353.061C470.358 336.241 471.508 303.443 470.977 291.249C469.65 261.646 465.934 242.64 458.59 228.007C449.387 209.422 436.911 198.657 410.631 186.547C397.624 180.492 387.36 177.128 375.857 175.278C366.035 173.596 340.198 172.923 328.43 173.933ZM85.0991 134.154C72.1804 139.453 64.2169 151.563 62.8896 168.13C61.0315 190.752 74.658 217.747 94.0359 229.605C108.547 238.604 124.563 238.183 135.623 228.512C140.578 224.139 143.233 220.018 145.976 212.197C147.657 207.235 148.011 204.628 147.923 195.798C147.834 186.968 147.48 184.108 145.445 177.885C139.163 157.954 126.775 143.069 110.671 135.92C105.539 133.566 103.504 133.145 96.6905 132.977C90.6736 132.809 87.8421 133.061 85.0991 134.154ZM166.858 80.5C160.576 82.9388 156.86 85.2937 152.524 89.919C136.154 107.243 135.358 141.05 150.843 167.205C156.152 176.119 166.947 186.715 174.645 190.584C177.653 192.014 182.608 193.864 185.705 194.621C204.906 199.33 223.045 186.547 229.505 163.841C231.54 156.608 231.628 138.948 229.593 130.37C224.461 109.093 210.392 90.0872 194.111 82.6865C187.917 79.8272 186.148 79.4908 179.069 79.1544C172.698 78.9021 170.132 79.1544 166.858 80.5ZM272.154 41.0582C256.846 43.497 243.574 57.289 238.088 76.3792C235.787 84.3686 235.787 108.084 238.176 116.326C243.662 135.5 255.165 150.553 269.411 157.281C274.986 159.888 275.959 160.056 284.276 160.056C292.505 160.056 293.567 159.888 299.053 157.281C314.626 150.049 324.89 131.631 326.041 109.177C327.987 70.2401 301.265 36.4328 272.154 41.0582ZM389.661 1.19591C371.344 5.40079 354.709 20.9589 345.684 42.4038C330.465 78.5658 336.57 123.054 360.372 149.376C366.566 156.272 371.61 160.056 379.839 163.925C409.393 177.801 442.397 159.972 456.643 122.213C461.421 109.43 462.837 100.768 462.837 84.3686C462.837 68.0535 461.421 59.3915 456.643 46.5246C444.167 13.4742 416.825 -5.02732 389.661 1.19591Z"
        @click="clicked($event)"
      />
    </g>
    <g
      stroke="black"
      stroke-width="1"
      fill="black"
      fill-opacity="0"
      id="txt_small"
    >
      <text v-for="items in textlist" :key="items[1]" x="60%" :y="items[1]">
        {{ items[0] }}
      </text>
    </g>
  </svg>
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
            2 +
          2.5
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
        document.getElementById("feetpath").style.webkitAnimation = "none"
        document.getElementById("txt_small").style.webkitAnimation = "none"
        setTimeout(function() {
          document.getElementById("feetpath").style.webkitAnimation = ""
          document.getElementById("txt_small").style.webkitAnimation = ""
        }, 10)
        console.log(this.textlist)
      } else if (store.state.detailed) {
        store.commit("loadInitialState")
        document.getElementById("feetpath").style.webkitAnimation = "none"
        document.getElementById("txt_small").style.webkitAnimation = "none"
        setTimeout(function() {
          document.getElementById("feetpath").style.webkitAnimation = ""
          document.getElementById("txt_small").style.webkitAnimation = ""
        }, 10)
      }
    },

    clicked2: function(event) {
      console.log(event)
    },
  },
}
</script>

<style scoped>
svg {
  width: 100%;
  height: 100%;
  text-transform: uppercase;
}

body {
  background-color: #fff1e6;
}

#feet {
  cursor: pointer;
}
#feetpath {
  stroke-dasharray: 3000;
  animation: dash 4s ease-in forwards;
}

@keyframes dash {
  0% {
    stroke-dashoffset: 3000;
  }
  80% {
    stroke-dashoffset: 0;
    fill-opacity: 0;
  }
  100% {
    stroke-dashoffset: 0;
    fill-opacity: 1;
  }
}

#txt_small {
  font: italic bold 60px sans-serif;
  stroke-dasharray: 550;
  animation: dashText 4s ease-in forwards;
}

@keyframes dashText {
  0% {
    stroke-dashoffset: 550;
  }
  80% {
    stroke-dashoffset: 0;
    fill-opacity: 0;
  }
  100% {
    stroke-width: 0;
    fill-opacity: 1;
  }
}
</style>
