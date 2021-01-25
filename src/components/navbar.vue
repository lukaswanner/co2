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
  height: 8vh;
  display: flex;
  flex-flow: row;
  background: transparent;
  transition: 0.5s;
}

img {
  padding-left: 8%;
  margin: auto 0;
  justify-self: flex-start;
  align-self: flex-start;
  transition: all 0.5s ease-in-out;
  cursor: pointer;
}
.menuItems {
  padding:0;
  width: 100%;
  list-style: none;
  margin-right: 1%;
  display: flex;
  justify-content: flex-end;
  align-content: center;
}
.menuItems li {
  margin:  auto 0;
  display: block;
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
  .menuItems {
    margin-right: 5%;
  }
  .menuItems a {
    font-size: 0.7em;
    margin-right: 10px;
  }
  img {
    width: 80%;
    height: 80%;
  }
}

@media only screen and (max-width: 380px) {
  .menuItems a {
    font-size: 0.6em;
    margin-right: 0px;
  }
  img {
    width: 40%;
    height: 40%;
  }
}
</style>
