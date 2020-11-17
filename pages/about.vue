<template>
  <div>
    <!-- <div 
      class="thefirmBody" 
      v-html="firmPage.top_page"
    />

    <div 
      class="historyArea"
      :style="{'background-image': `url(${firmPage.images.middle_image.data})`}"
      v-html="firmPage.middle_page"
    />

    <div 
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
    } catch (err) {
      error(err);
    }
    return {};
  },

  computed: {
    ...mapState("abouts", ["aboutPage"]),
    ...mapState("pages", ["AboutPage"]),
  },
};
</script>

<style lang="scss">
@import "~assets/variable.scss";
</style>
