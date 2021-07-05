<template>
  <div class="defaultLayout">
    <navbar-menu />
    <layout-hero :param="homePage" />
    <div class="nomineeLayout_body">
      <nuxt />
    </div>
    <layout-footer />
  </div>
</template>

<script>
import LayoutFooter from "@/components/footer";
import LayoutHero from "@/components/LayoutHero.vue";
import NavbarMenu from "@/components/NavbarMenu.vue";

import { mapState } from "vuex";

export default {
  components: {
    LayoutFooter,
    LayoutHero,
    NavbarMenu,
  },

  computed: {
    // ...mapState(["hero"]),
    ...mapState(["homePage"]),
  },
};
</script>

<style lang="scss">
@import "~assets/style.scss";
</style>

