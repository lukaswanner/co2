<template>
  <div class="navbar">
    <img src="../assets/logo.svg" alt="earth our home" />
    <ul class="menuItems">
      <li><a href="#" data-item="About">About</a></li>
      <li><a href="#" data-item="Projects">Projects</a></li>
      <li><a href="#" data-item="Contact">Contact</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "navbar",
  data() {
    return {}
  },
  methods: {},
}
</script>

<style scoped>
.navbar {
  height: 100%;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-template-rows: 1fr;
  grid-template-areas: "logo menu";
  background: transparent;
}
img {
  grid-area: logo;
  align-self: center;
  transition: all 0.5s ease-in-out;
  padding: 10px;
  position: relative;
  bottom: 10%;
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
  text-decoration: #b8283f;
  text-decoration-line: underline;
}

@media only screen and (max-width: 720px) {
  a {
    font-size: 15px;
    padding: 10px;
  }
}
</style>
