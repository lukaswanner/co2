<template>
  <div class="container">
    <div class="inner">
      <img src="../assets/logo.svg" alt="earth our home" />
      <ul class="menuItems">
        <li><a href="#" data-item="About">About</a></li>
        <li><a href="#" data-item="Projects">Projects</a></li>
        <li><a href="#" data-item="Contact">Contact</a></li>
        <label for="hamburg" class="hamburg">
          <span class="line"></span>
          <span class="line"></span>
          <span class="line"></span>
        </label>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "navbar",
  data() {
    return {}
  },
}
</script>

<style scoped>
.container {
  height: 100%;
  margin: 0;
  padding: 0;
  background: transparent;
}
.inner {
  height: 100%;
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-template-rows: 1fr;
  grid-template-areas: "logo menu";
}
img {
  grid-area: logo;
  align-self: center;
  transition: all 0.5s ease-in-out;
  padding: 10px;
  cursor: pointer;
}
.menuItems {
  grid-area: menu;
  list-style: none;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}

a {
  text-decoration: none;
  color: #525ca3;
  font-size: 24px;
  font-weight: 600;
  padding: 20px;
  transition: all 0.5s;
  text-transform: uppercase;
}

.menuItems a:hover {
  color: #b8283f;
}

label.hamburg {
  display: block;
  background: #555;
  width: 75px;
  height: 50px;
  margin-left: 80px;
  border-radius: 4px;
}


@media only screen and (max-width: 600px) {
  .inner {
    grid-template-columns: 150px 450px;
    background-color: pink;
  }
  .menuItems {
    justify-content: flex-start;
    align-items: center;
  }
  a {
    display: none;
  }
}
</style>
