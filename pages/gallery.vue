<template>
  <div>
    <div class="grey-bg banner box-shadow">
      <h1 class="title has-text-centered is-size-4-mobile">{{ value.header }}</h1>
    </div>
    <section class="section dark">
      <div class="container">
        <div class="columns is-multiline">
          <div class="column is-one-third" v-for="image in paginatedItems()" :key="image.id">
            <a
              :href="image.media_url"
              target="_blank"
              v-show="image.media_type =='CAROUSEL_ALBUM' || image.media_type =='IMAGE'"
            >
              <div :style="{'background-image': `url(${image.media_url})`}" class="gallery-image" />
            </a>
            <video v-show="image.media_type =='VIDEO'" height="280" controls class="gallery-image">
              <source :src="image.media_url" type="video/mp4" />
            </video>
          </div>
        </div>
      </div>
    </section>
    <section class="section dark no-padding-top">
      <div class="container">
        <b-pagination
          :total="total"
          :per-page="perPage"
          :current.sync="current"
          :paginated="isPaginated"
        />
      </div>
    </section>
  </div>
</template>

<script>
import { copy } from "@/utils/helpers";
import { mapState } from "vuex";

export default {
  layout: "home",
  head() {
    return {
      title: "Gallery",
      meta: [
        {
          property: "og:title",
          content: this.value.header,
        },
        {
          property: "og:url",
          content: "https://www.splashfm1055.com/gallery",
        },
        {
          property: "og:image",
          content: "https://www.splashfm1055.com/img/logo.png",
        },
      ],
    };
  },
  async asyncData({ store }) {
    let param = { page: 1, offset: 9 };
    let c = await Promise.all([
      store.dispatch("pages/getPage", 2),
      // store.dispatch("gallery/getGallery", param),
      store.dispatch("gallery/getInstagramGallery"),
      store.dispatch("gallery/getCount"),
    ]);
    console.log(c);
    let value = copy(store.state.pages.galleryPage.attributes);
    // let total = store.state.gallery.count;
    let total = store.state.gallery.gallery.length;
    let instagram_total = store.state.gallery.gallery;
    console.log(total);
    console.log(value);

    return { value, total, instagram_total };
  },

  created() {
    this.$store.dispatch("changeAbsolute", false);
    this.$store.dispatch("changeShowMap", true);
  },

  data() {
    return {
      current: 1,
      perPage: 9,
      description: "welcome to our Gallery",
      isPaginated: true,
    };
  },

  computed: {
    ...mapState("gallery", ["gallery"]),
  },

  methods: {
    // async setPage(val) {
    //   let param = {page: val, offset: this.perPage}
    //   await this.$store.dispatch("presenter/getPresenters", param);
    // }
    paginatedItems() {
      let page_number = this.current - 1;
      return this.instagram_total.slice(
        page_number * this.perPage,
        (page_number + 1) * this.perPage
      );
    },
  },
};
</script>

<style>
</style>