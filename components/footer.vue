<template>
  <div class="footerComp container">
    <div class="columns footer--top">
      <div class="column is-one-third is-hidden-mobile">
        <div class="footerComp--title">Resources</div>
        <ul>
          <li v-for="resource in getResourceList" :key="resource.id">
            <nuxt-link :to="'/resources/'+resource.id">{{ resource.short_title }}</nuxt-link>
          </li>
        </ul>
      </div>
      <div class="column is-hidden-mobile">
        <div class="footerComp--title">Practice Areas</div>
        <ul>
          <li v-for="practice in practices" :key="practice.id">
            <nuxt-link :to="'/practicearea#'+practice.id">{{ practice.title }}</nuxt-link>
          </li>
        </ul>
      </div>
      <div class="column is-hidden-mobile">
        <div class="footerComp--title">Useful Links</div>
        <ul>
          <li>
            <nuxt-link to="/">Home</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/thefirm">The Firm</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/practicearea">Practice Area</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/ourpeople">Our People</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/news">News</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/resources">Publications</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/contactus">Contact</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/careers">Careers</nuxt-link>
          </li>
        </ul>
      </div>
      <div class="column">
        <div class="footerComp--title">Social Media Links</div>
        <ul class="footerComp--socialicons">
          <li>
            <a href="https://www.linkedin.com/company/10055306/admin/updates/" target="_blank">
              <img src="/img/linkedin.png" />
            </a>
          </li>
        </ul>
        <div class="footerComp--logo">
          <img src="/img/iccfraudnet.png" />
        </div>
      </div>
    </div>
    <div class="copyright">
      <p>
        Sofunde Osakwe Ogundipe & Belgore Legal Practioners © 2018 - All rights reserved
        <br />Photos courtesy of Seni Williams and Yinka Akinkugbe
      </p>
    </div>
    <div class="orbsol">
      <a href="http://orbsolutions.com.ng/" target="_blank">Powered by Orb Solitions ©</a>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";

export default {
  name: "LayoutFooter",

  async mounted() {
    await this.$store.dispatch("practice/getPracticeAreas");
    await this.$store.dispatch("resources/getResources");
    // await this.$store.dispatch("pages/getCredits");
  },

  computed: {
    ...mapState("practice", ["practices"]),
    // ...mapState("pages",["credits"]),
    ...mapGetters("resources", ["getResourceList"]),
  },
};
</script>


