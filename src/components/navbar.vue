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
  width: 100vw;
  display: flex;
  flex-flow: row;
  background: transparent;
  transition: 0.5s;
}

img {
  align-self: center;
  transition: all 0.5s ease-in-out;
  cursor: pointer;
}
.menuItems {
  width: 100%;
  list-style: none;
  margin-top: 2%;
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
}

.menuItems a {
  text-decoration: none;
  color: #edecda;
  font-size: 1.2em;
  font-weight: 600;
  margin-right: 30px;
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

@media only screen and (max-width: 675px) {
  .menuItems a {
    font-size: 0.7em;
    margin-right: 10px;
  }
  img {
    height: 80%;
  }
}

@media only screen and (max-width: 350px) {
  .menuItems a {
    font-size: 0.6em;
    margin-right: 0px;
  }
}
</style>
