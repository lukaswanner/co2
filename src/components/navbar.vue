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
  mounted() {
    var prevScrollpos = window.pageYOffset
    window.onscroll = function() {
      var currentScrollPos = window.pageYOffset
      if (prevScrollpos > currentScrollPos) {
        document.getElementsByClassName("navbar")[0].style.top = "0"
      } else {
        document.getElementsByClassName("navbar")[0].style.top = "-10vh"
      }
      prevScrollpos = currentScrollPos
    }
  },
  methods: {},
}
</script>

<style scoped>
.navbar {
  position: fixed;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  background: transparent;
  transition: 0.5s;
}

img {
  grid-column-start: 2;
  grid-column-end: 3;
  align-self: center;
  transition: all 0.5s ease-in-out;
  padding: 10px;
  cursor: pointer;
}
.menuItems {
  grid-column-start: 8;
  grid-column-end: 13;
  list-style: none;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}

.menuItems a {
  text-decoration: none;
  color: #edecda;
  font-size: 24px;
  font-weight: 600;
  margin: 30px;
  transition: all 0.5s ease-in-out;
  text-transform: uppercase;
}

.menuItems a:hover {
  color: #b8283f;
  text-decoration: #b8283f;
  text-decoration-line: underline;
}

.menuItems a:last-child {
  padding-right: 20px;
}

@media only screen and (max-width: 720px) {
  a {
    font-size: 18px;
    padding: 8px;
  }
}
</style>
