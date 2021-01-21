<template>
  <div class="hero_container">
    <b-carousel :pause-hover="!pauseHover">
      <b-carousel-item
        v-for="(carousel, i) in homePage.page.attributes.carousel"
        :key="i"
      >
        <section
          class="hero is-large"
          id="slider"
          :style="{
            'background-image': `linear-gradient(rgba(0, 0, 0, 0.75),rgba(0, 0, 0, 0.75)), url(${carousel.image.data})`,
          }"
        >
          <div class="hero-head">
            <!-- <layout-header /> -->
            <navbar-menu />
          </div>
          <div class="hero-body">
            <div class="container has-text-centered">
              <h4 class="title">
                <div v-html="carousel.content.replace(/<[^>]*>?/gm, '')"></div>
              </h4>
              <!-- <div v-for="( herosubtitle, i) in param.header.header_contents" :key="i" type="list">
                <h2 class="subtitle" v-html="herosubtitle"></h2>
              </div>-->
            </div>
          </div>
        </section>
      </b-carousel-item>
    </b-carousel>
  </div>
</template>

<script>
// import LayoutHeader from "@/components/header";
import NavbarMenu from "@/components/NavbarMenu.vue";

import { mapState } from "vuex";

export default {
  components: {
    // LayoutHeader,
    NavbarMenu,
  },
  data() {
    return {
      pauseHover: true,
    };
  },
  // props: {
  //   param: {
  //     type: Object,
  //     default: () => {},
  //   },
  // },
  computed: {
    ...mapState("pages", ["homePage"]),
  },
};
</script>

<style>
/* .is-large {
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  max-height: 100%;
}

.container .subtitle {
  font-size: 1.25rem;
  padding: 0.275rem 0;
} */
.hero-body .container.has-text-centered .title {
  font-size: 28;
  /* text-shadow: 1px 0px 4px; */
  text-transform: capitalize;
  width: 100%;
  font-family: Oxygen;
  font-weight: bolder;
  color: white !important;
}
/* li {
  padding: 0.5rem 0;
  color: white;
} */
/* .subtitle {
  color: white;
} */
</style>