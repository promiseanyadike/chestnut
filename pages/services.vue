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
        height: "400px",
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
    return {};
  },
};
</script>

<style lang="scss">
.paragraphBlockComp.reverse {
  flex-direction: row-reverse;
}
</style>


