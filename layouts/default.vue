<template>
  <!-- <div class="homePage_layout">
    <div>
      <navbar-menu />
    </div>
    <div>
      <nuxt />
    </div>
  </div>-->
  <div class="defaultLayout">
    <layout-billboard :param="billboard">
      <!-- <layout-header /> -->
      <navbar-menu />
    </layout-billboard>

    <div class="defaultLayout_body">
      <nuxt />
    </div>

    <layout-footer />
  </div>
</template>

<script>
// import NavbarMenu from "~/components/NavbarMenu.vue";

// export default {
//   components: NavbarMenu,
// };
import LayoutHeader from "@/components/header";
import NavbarMenu from "@/components/NavbarMenu";
import LayoutBillboard from "@/components/billboard";
import LayoutFooter from "@/components/footer";

import { mapState } from "vuex";

export default {
  components: {
    LayoutHeader,
    LayoutBillboard,
    LayoutFooter,
    NavbarMenu,
  },

  data() {
    return {
      caption: "Chambers & Partners 2015: Top Ranked in Dispute Resolution",
    };
  },

  // head () {
  //   return {
  //     script: this.scripts,
  //     noscript: this.noscripts,
  //     __dangerouslyDisableSanitizers: ['script', 'noscript']
  //   }
  // },

  computed: {
    ...mapState(["billboard"]),
    ...mapState("snippets", ["scripts", "noscripts"]),
  },
};
</script>


<style lang="scss">
@import "~assets/style.scss";
</style>