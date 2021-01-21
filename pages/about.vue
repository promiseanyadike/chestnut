<template>
  <div class="second_section">
    <div
      v-for="(allaboutchestnut, i) in allFirmPage.slice(0, 2)"
      :key="i"
      class="thefirmBody"
    >
      <div
        class="is-uppercase is-size-5 title"
        v-html="allaboutchestnut.title"
      />
      <div v-html="allaboutchestnut.content" class="subtitle" />
    </div>

    <section class="section">
      <div class="container greyish about-padding">
        <div class="has-text-centered">
          <h1 class="about-header is-size-4">- Leadership -</h1>
        </div>
        <div class="columns about-us is-multiline">
          <div
            class="column"
            v-for="(x, i) in allFirmPage.slice(2, 5)"
            :key="i"
          >
            <div class="img-center">
              <img class="image-rounded" :src="x.image.data" />
            </div>
            <div class="top-margin">
              <div class="leadership has-text-centered">
                <h3
                  class="subtitle has-text-black has-text-centered"
                  v-html="x.title"
                ></h3>
                <h2
                  class="title has-text-black is-size-5"
                  v-html="x.content"
                ></h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- <div 
      class="historyArea"
      :style="{'background-image': `url(${firmPage.images.middle_image.data})`}"
      v-html="firmPage.middle_page"
    /> -->

    <!-- <div 
      class="reputationArea" 
      v-html="firmPage.bottom_page"
    /> -->
  </div>
</template>

<script>
import axios from "axios";
import { mapState } from "vuex";
import { copy } from "@/utils/helpers";

export default {
  // async asyncData({ store }) {
  //   await Promise.all([
  //     store.dispatch("pages/AboutPage"),
  //     store.dispatch("abouts/getAboutPage"),

  //   ]);
  //   let data = {
  //     image: store.state.pages.AboutPage.image.data,
  //     height: "400px",
  //     left: store.state.pages.AboutPage.title,
  //   };
  //   store.dispatch("setBillboard", data);

  //   let abouts = copy(store.state.abouts.aboutPages);

  //   return { data, abouts };
  // },

  // head () {
  //   return {
  //     meta: this.firmPage.meta
  //   }
  // },

  async asyncData({ store, error }) {
    try {
      let x = await Promise.all([
        store.dispatch("pages/getAboutPage"),
        store.dispatch("abouts/getAboutPage"),
        store.dispatch("abouts/getFirmPage"),
      ]);
      console.log(x);
      let data = {
        image: store.state.pages.AboutPage.image.data,
        height: "400px",
        left: store.state.pages.AboutPage.title,
      };
      store.dispatch("setBillboard", data);
      console.log(data.left);
      console.log(data);
      // let y = copy(store.state.abouts.allFirmPage);
      // console.log(y);
    } catch (err) {
      error(err);
    }
    return {};
  },
  //   let x = await Promise.all([
  //     store.dispatch("pages/getAboutPage"),
  //     store.dispatch("abouts/getAboutPage"),
  //     store.dispatch("abouts/getFirmPage"),
  //   ]);
  //   console.log(x);
  //   let data = {
  //     image: store.state.pages.AboutPage.image.data,
  //     height: "400px",
  //     left: store.state.pages.AboutPage.title,
  //   };
  //   store.dispatch("setBillboard", data);
  //   console.log(data.left);
  //   console.log(data);
  //   let y = copy(store.state.abouts.allFirmPage);
  //   console.log(y);
  //   return { data, y };
  // },

  computed: {
    ...mapState("abouts", ["allFirmPage", "aboutPages"]),
    ...mapState("pages", ["AboutPage"]),
  },
};
</script>

<style lang="scss">
@import "~assets/variable.scss";
.section {
  padding: 0 !important;
}
.subtitle {
  padding-top: 0.5rem;
  text-align: justify;
  font-size: 1rem;
  line-height: 1.8rem;
}
</style>
