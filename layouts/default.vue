<template>
  <div>
    <top-navbar @hideSideBar="hideSideBar()" @logout="logout" />
    <side-bar :displaySideBar="displaySideBar" />
    <nuxt :class="displaySideBar" />
  </div>
</template>

<script>
import TopNavbar from "~/components/TopNavbar.vue";
import { Notification } from "@/utils/helpers";
import SideBar from "~/components/SideBar.vue";

export default {
  components: { TopNavbar, SideBar },
  // middleware: ["account_status"],

  data() {
    return {
      displaySideBar: "",
      menuHidden: "",
    };
  },
  async mounted() {
    // await this.$store.dispatch("test2/CreatePages");
    // await this.$store.dispatch("test2/News");
    // await this.$store.dispatch("test2/Categorys");
    // await this.$store.dispatch("test2/Blog");
  },

  methods: {
    hideSideBar() {
      if (_.isEqual(this.displaySideBar, "")) {
        this.displaySideBar = "hide-menu";
      } else this.displaySideBar = "";
    },
    async logout() {
      let res = await await this.$store.dispatch("auth/logout");
      if (res) {
        window.location = "/";
      }
    },
  },
};
</script>

<style lang="scss">
@import "~assets/style.scss";
</style>
