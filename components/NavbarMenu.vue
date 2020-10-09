<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <a class="navbar-item" href="http://localhost:3000/img/dtouchlogo.png" target="_blank">
        <img src="img/logo.png" alt="Logo" />
      </a>
      <span
        class="navbar-burger burger"
        data-target="navbarMenuHeroA"
        @click="showNav = !showNav"
        :class="{ 'is-active': showNav }"
        style="color: #f5e1f9"
      >
        <span></span>
        <span></span>
        <span></span>
      </span>
    </div>
    <div id="navbarMenuHeroA" class="navbar-menu" :class="{ 'is-active': showNav }">
      <div class="navbar-end">
        <nuxt-link class="navbar-item" to="/">Home</nuxt-link>
        <nuxt-link class="navbar-item" to="/services" exact-active-class="is-active">Services</nuxt-link>
        <nuxt-link class="navbar-item" to="/gallery" exact-active-class="is-active">Gallery</nuxt-link>
        <nuxt-link class="navbar-item" to="/contact" exact-active-class="is-active">Contact us</nuxt-link>
        <nuxt-link class="navbar-item" to="/about" exact-active-class="is-active">About Us</nuxt-link>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      attached: false,
      showNav: false,
      search: "",
      // logo: "http://localhost:4000/static/dtouchlogo.svg"
    };
  },
  props: {
    data: {
      type: String,
      default: "",
    },
  },
};
</script>

<style lang="scss">
.navbar {
  /* background-color: transparent; */
  background-color: black;
}
.field.has-addons {
  padding-top: 18px !important;
  justify-content: center;
}
.navbar-item {
  color: yellow;
}
/* .navbar-item :hover{
    color:black;
  } */
.navbar-end a {
  text-transform: uppercase;
  letter-spacing: 1px;
  font-size: 95%;
  font-weight: bold;
}
/* nav a img {
    min-height: 860% !important;
  } */
.navbar-item img {
  max-height: 3.5rem;
}
@media screen and (max-width: 481px) {
  .navbar-item img {
    max-height: 4.75rem !important;
  }
}

@media screen and (max-width: 481px) {
  .navbar-item img {
    max-height: 4.75rem !important;
  }
}
// .navbar-menu {
//   background-color: black !important;
// }
</style>
