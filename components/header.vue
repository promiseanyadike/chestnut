<template>
  <div class="headerComp">
    <div class="pageLogo">
      <nuxt-link to="/">
        <div class>
          <!-- <div class="logo">
            Sofunde Osakwe Ogundipe & Belgore
          </div>
          <div class="logo--sub">
            legal practitioners
          </div>-->
          <img class="soob-logo" src="/img/logo.png" alt />
        </div>
      </nuxt-link>
      <div class="burgerMenu" @click="toggleNavigation" v-if="showBurger">
        <!-- <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
        </a>-->
        <i class="mdi mdi-menu faicon" />
      </div>
      <!-- <img src="logo.png" /> -->
    </div>

    <div class="menuList" v-if="showNav">
      <nuxt-link v-for="(i,idx) in menu" :key="idx" :to="i.url" class="menuItem">{{ i.label }}</nuxt-link>
    </div>

    <div class="menuList" v-if="showNavigation">
      <nuxt-link v-for="(i,idx) in menu" :key="idx" :to="i.url" class="menuItem">{{ i.label }}</nuxt-link>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  watch: {
    $route: function () {
      this.showNavigation = false;
    },

    windowWidth: function (val) {
      if (val >= 768) {
        this.showNavigation = false;
        this.showNav = true;
        this.showBurger = false;
      }
      if (val < 768) {
        this.showNavigation = false;
        this.showNav = false;
        this.showBurger = true;
      }
    },
  },

  data() {
    return {
      showNavigation: false,
      showNav: false,
      showBurger: false,
      windowWidth: 0,
    };
  },

  created() {
    if (typeof window !== "undefined") {
      this.$nextTick(() => {
        window.addEventListener("resize", this.getWindowWidth);
        this.getWindowWidth();
      });
    }
  },

  computed: {
    ...mapState(["menu"]),
  },

  methods: {
    toggleNavigation() {
      this.showNavigation = !this.showNavigation;
    },

    getWindowWidth(event) {
      this.windowWidth = document.documentElement.clientWidth;
    },
  },
};
</script>


