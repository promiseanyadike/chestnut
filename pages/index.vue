<template>
  <div class="homePage">
    <paragraph-block
      :title="value.page.attributes.pages.title"
      :subtitle="value.page.attributes.pages.subtitle"
      :content="value.page.attributes.pages.content"
      :image="value.page.attributes.pages.image.data"
    />
    <section class="second_section">
      <div class="is-uppercase is-size-3">Services</div>
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
              <div class="investigateBlock--title" v-html="areas.Title"></div>
              <div class="investigateBlock--content" v-html="areas.Content"></div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="third_section">this is it</section>
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
  },

  async asyncData({ store, error }) {
    try {
      let home = await Promise.all([
        store.dispatch("pages/getHomePage"),
        store.dispatch("service/getServicePage"),
        // store.dispatch("pages/getAboutPage"),
        // store.dispatch("pages/getContactPage"),
      ]);
      // console.log(home);
    } catch (err) {
      error(err);
    }

    let value = copy(store.state.pages.homePage);
    let service = copy(store.state.service.servicePage);
    // let contact = copy(store.state.pages.contactPage);
    // console.log(value);
    console.log(service);
    return {
      value,
      service,
      // contact,
    };
  },
};
</script>
