<template>
  <div class="section">
    <section>
      <b-carousel :pause-hover="!pauseHover">
        <b-carousel-item v-for="(carousel, i) in value.page.attributes.carousel" :key="i">
          <section
            class="hero is-large"
            id="slider"
            :style="{
            'background-image': `linear-gradient(rgba(0, 0, 0, 0.75),rgba(0, 0, 0, 0.75)), url(${carousel.image.data})`
          }"
          >
            <div class="hero-head">
              <!-- <nav-bar-menu :data="logo" /> -->
              <nav-bar-menu />
            </div>
            <!-- <div class="hero-body" style="padding-top: 4.5em" > -->
            <div class="hero-body">
              <div class="container has-text-centered">
                <h1 class="title">
                  <div
                    :class="divClasses"
                    @click="attached = !attached"
                    id="title"
                    v-html="carousel.title"
                  ></div>
                </h1>
                <h2 class="subtitle" v-html="carousel.content"></h2>
              </div>
            </div>
          </section>
        </b-carousel-item>
      </b-carousel>
    </section>
  </div>
</template>

<script>
export default {
  name: "HomePage",

  components: {},
};
</script>
