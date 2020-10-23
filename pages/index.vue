<template>
  <div class="homePage">
    <paragraph-block
      :title="value.page.attributes.pages.title"
      :subtitle="value.page.attributes.pages.subtitle"
      :content="value.page.attributes.pages.content"
      :image="value.page.attributes.pages.image.data"
    />
    <section class="second_section">
      <div class="services is-uppercase is-size-3">Services</div>
      <div class="container">
        <div class="columns is-multiline">
          <div class="column is-6 box-wrap" v-for=" (areas, i) in service" :key="i">
            <div
              class="investigateBlock"
              style="background: transparent; box-shadow: 0 0 9px 2px #064e685e"
            >
              <!-- <h4 class="never">
                <span class="icon has-text-info">
                  <i style="font-size: 60px" :class="service.icon"></i>
                </span>
              </h4>-->
              <h4 class="never">
                <span class="icon has-text-warning">
                  <i style="font-size: 60px" :class="areas.Image.name"></i>
                </span>
              </h4>
              <div
                class="investigateBlock--title"
                style="text-align:center; padding-bottom:1rem"
                v-html="areas.Title"
              ></div>
              <div class="investigateBlock--content" v-html="areas.Content"></div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section
      class="dark"
      :style="{'background-image': `linear-gradient(rgba(0, 0, 0, 0.75),rgba(0, 0, 0, 0.75)), url(${galleryPage.page.attributes.image.banner_image.data})`}"
    >
      <div class="container" v-if="galleryImages.length > 0">
        <!-- <div class="container"> -->
        <div class="is-uppercase is-size-3">GALLERY</div>
        <div class="columns is-gapless">
          <!-- <div class="column" v-for="event in galleryImages" :key="event.id">
            <a :href="event.link" target="_blank">
              <div :style="{'background-image': `url(${event.image.data})`}" class="event" />
            </a>
          </div>-->
          <div class="column" v-for="event in gallery.slice(0,4)" :key="event.id">
            <div
              :style="{'background-image': `url(${event.media_url})`}"
              class="event"
              v-show="event.media_type =='CAROUSEL_ALBUM' || event.media_type =='IMAGE'"
            />
            <video v-show="event.media_type =='VIDEO'" height="280" controls>
              <source :src="event.media_url" type="video/mp4" />
            </video>
          </div>
        </div>
        <div class="has-text-right view-more">
          <nuxt-link to="/gallery">
            <h1 class="content heading" style="color: yellow;">MORE</h1>
          </nuxt-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import axios from "axios";
import { mapState } from "vuex";
import { copy } from "@/utils/helpers";
import ParagraphBlock from "@/components/paragraphBlock";

export default {
  name: "HomePage",
  layout: "home",
  ParagraphBlock,
  components: {},

  computed: {
    ...mapState(["servicePages"]),
    ...mapState("gallery", ["gallery"]),

    galleryImages() {
      let x = this.gallery.slice();
      console.log(x);
      return x.splice(0, 4);
    },
  },

  async asyncData({ store, error }) {
    try {
      let home = await Promise.all([
        store.dispatch("pages/getHomePage"),
        store.dispatch("service/getServicePage"),
        store.dispatch("gallery/getInstagramGallery"),
        store.dispatch("pages/getGalleryPage", 2),
        // store.dispatch("pages/getAboutPage"),
        // store.dispatch("pages/getContactPage"),
      ]);
      // console.log(home);
    } catch (err) {
      error(err);
    }

    let value = copy(store.state.pages.homePage);
    let service = copy(store.state.service.servicePage);
    let galleryPage = copy(store.state.pages.galleryPage);
    // let contact = copy(store.state.pages.contactPage);
    // console.log(value);
    console.log(service);
    return {
      value,
      service,
      galleryPage,
      // contact,
    };
  },
};
</script>
