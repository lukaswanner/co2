<template>
  <div class="wrapper">
    <div style="display:none;">
      <img
        :id="co2_category + '_img'"
        src="https://mdn.mozillademos.org/files/5397/rhino.jpg"
        width="300"
        height="227"
      />
    </div>
    <canvas :id="co2_category + '_canvas'"> </canvas>
  </div>
</template>

<script>
export default {
  name: "FootPrint",
  props: {
    co2_category: {
      type: String,
      default: "test",
    },
    color: {
      type: String,
    },
    img_x: {
      type: Number,
    },
    img_y: {
      type: Number,
    },
    img_width: {
      type: Number,
    },
    img_heigth: {
      type: Number,
    },
  },
  data() {
    return {
      width: 0,
      heigth: 0,
    }
  },
  mounted: function() {
    const canvasid = this.co2_category + "_canvas"
    const imgid = this.co2_category + "_img"
    var canvas = document.getElementById(canvasid)
    canvas.width = 500
    canvas.height = 250
    var ctx = canvas.getContext("2d")
    var image = document.getElementById(imgid)
    canvas.style.backgroundColor = this.color
    //img x y länge höhe canvas x y länge höhe
    ctx.drawImage(
      image,
      this.img_x,
      this.img_y,
      this.img_width,
      this.img_heigth,
      0,
      0,
      500,
      250
    )
  },
  methods: {},
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
body {
  padding-top: 1em;
}

img {
  display: block;
  margin: 0 auto 1em;
}

.single-image {
  width: 150px;
}

canvas {
  background: #fff;
  display: block;
  margin: 0 auto;
}
</style>
