<template>
  <div id="info-container">
    <div class="header">
      <h1><span>We</span> Are Facing A Global Crisis</h1>
    </div>
    <div class="info">
      <p>
        Climate change is one of the greatest challenges of our age. The World
        Health Organization (WHO) estimates that between 2030 and 2050 climate
        change will cause an estimated 250,000 additional deaths each year.
        Sanofi has committed to "Planet Mobilization", a program designed to
        evaluate and limit direct and indirect impacts of our operations on the
        environment throughout the lifecycle of our products. From the raw
        materials we use in our products to their potential end-of-life impact
        on human health and the environment, we strive to reduce the potentially
        negative effects of our activities.<br /><br />
        We strive to reduce our Co2 emission as far as possible and we need
        <span>every one and all </span> to help us achieve this goal. Help us
        achieve this goal and messure your Co2 footprint now.
      </p>
      <div class="quote"><p>-Paul Hudson, CEO of Sanofi</p></div>
    </div>
    <div class="scroll"><p>Scroll Down</p></div>
  </div>
</template>

<script>
export default {
  name: "Info",
  mounted() {
    let options1 = {
      root: null,
      rootMargin: "-20%",
      threshold: 0.0,
    }
    let options2 = {
      root: null,
      rootMargin: "0px",
      threshold: 0.0,
    }
    function setOpacityZero(entries) {
      if (entries[0].isIntersecting) {
        entries[0].target.style.opacity = "0"
      }
    }

    function setOpacityOne(entries) {
      if (!entries[0].isIntersecting) {
        entries[0].target.style.opacity = "1"
      }
    }

    let observer = new IntersectionObserver(setOpacityZero, options1)
    let observer2 = new IntersectionObserver(setOpacityOne, options2)
    observer.observe(document.getElementsByClassName("scroll")[0])
    observer2.observe(document.getElementsByClassName("scroll")[0])
  },
}
</script>

<style scoped>
#info-container {
  font-family: "Nunito", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  margin-top: 10%;

  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  background-color: #231f20;
}

.header {
  justify-content: flex-end;
  text-align: center;
  width: 100%;
  margin: 0;

  color: #ebebeb;
  font-size: 2em;
  word-spacing: 0em;
  opacity: 1;

  transition: 4s ease-in-out;
}

span {
  color: #b8283f;
}

.info {
  text-align: left;
  width: 50%;
  margin: 0;
  margin-top: 5%;

  color: #ebebeb;
  font-size: 1.2em;
  line-height: 2em;
  word-spacing: 0.1em;

  opacity: 1;

  transition: 4s ease-in-out;
}

.quote {
  text-align: left;
  font-size: 0.8em;
  color: rgb(83, 165, 114);
}

.scroll {
  margin-top: 8%;
  transition: 2s ease-in-out;
}

.scroll p {
  color: #ebebeb;
  font-size: 0.8em;
  opacity: 0.5;
}
</style>
