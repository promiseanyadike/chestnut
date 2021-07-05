<template>
  <div class="homePage">
    <paragraph-block
      :reverse="checkReverse(practice.ID)"
      v-for="practice in areaPage"
      :key="practice.ID"
      :id="practice.ID"
      :title="practice.Title"
      :content="practice.Content"
      :image="practice.Image.data"
    />
    <section class="sectionsix">
      <div class="has-text-centered has-text-white">
        <div class="columns">
          <div
            class="column social"
            :style="social.color"
            v-for="social in socials"
            :key="social.id"
          >
            <a
              :href="social.link"
              :style="social.color"
              class="has-text-white"
              :key="social.id"
              target="_blank"
            >
              <div
                :class="social.icon"
                class="social-icon mdi is-size-3-desktop"
                v-html="social.text"
              ></div>
              <!-- {{social.text}} -->
            </a>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

// <script>
import ParagraphBlock from "@/components/paragraphBlock";
import { mapState } from "vuex";
import { copy } from "@/utils/helpers";

export default {
  components: {
    ParagraphBlock,
  },

  async asyncData({ store, error }) {
    try {
      let x = await Promise.all([
        store.dispatch("pages/getAreaPage"),
        store.dispatch("service/getServicePage"),
        store.dispatch("abouts/getAboutPage"),
      ]);
      console.log(x);

      let data = {
        image: store.state.pages.servicePage.image.data,
        height: "460px",
        right: "",
        left: store.state.pages.servicePage.title,
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
    ...mapState("service", ["areaPage"]),
    ...mapState("pages", ["servicePage"]),
  },

  methods: {
    checkReverse(val) {
      if (val % 2 == 0) {
        return true;
      }
      return false;
    },
  },

  data() {
    return {
      socials: [
        {
          id: 4,
          icon: "mdi-facebook",
          link: "https://www.facebook.com/dtouchexpertslaundry/",
          color: "background-color: hsl(204, 86%, 53%)",
          text: "like us on facebook",
        },

        {
          id: 2,
          icon: "mdi-twitter",
          link: "https://twitter.com/dtouchexpertslaundry",
          color: "background-color: grey",
          text: "follow us on twitter",
        },
        {
          id: 3,
          icon: "mdi-instagram",
          link: "https://www.instagram.com/dtouchexpertslaundry/",
          color: "background-color: #553592",
          text: "follow us on instagram",
        },
      ],
    };
  },
};
</script>

<style lang="scss">
.paragraphBlockComp.reverse {
  flex-direction: row-reverse;
}
</style>


