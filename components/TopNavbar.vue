<template>
  <nav class="navbar fixed-top">
    <div class="navbar-left">
      <div class="menu-button">
        <i class="mdi mdi-menu" @click="hideSideBar" />
      </div>
      <!-- <div class="img">
        <img src="../assets/dtouchlogo.svg" alt="logo"/>
      </div> -->
    </div>
    <div class="navbar-right">
      <div class="user">
        <b-dropdown aria-role="list">
          <button class="button" slot="trigger">
            <!-- <p class="user__name">{{`${admin.first_name} ${admin.surname}`}}</p> -->
            <div class="mdi mdi-account-circle" alt="dtouchexperts">
              chestnutandbolt
            </div>
          </button>

          <!-- <b-dropdown-item aria-role="listitem" @click="navSettings">Settings</b-dropdown-item> -->
          <b-dropdown-item aria-role="listitem" @click="signout"
            >Sign Out</b-dropdown-item
          >
        </b-dropdown>
      </div>
    </div>
  </nav>
</template>

<script>
import LogoutModal from "@/components/widgets/LogoutModal.vue";
import { mapState } from "vuex";

export default {
  data() {
    return {
      mobileView: "",
      searchMode: 1, // 1 switches view && 2 searches
    };
  },
  props: {
    authenticated: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    ...mapState("auth", ["admin"]),
  },

  methods: {
    search() {
      const screenWidth = window.screen.width;
      if (screenWidth > 767 || this.searchMode === 2) {
        this.searchMode = 1;
        this.mobileView = "";
      } else {
        this.mobileView = "mobile-view";
        this.searchMode = 2;
      }
    },
    async signout() {
      this.$buefy.modal.open({
        parent: this,
        component: LogoutModal,
        hasModalCard: true,
        props: {
          authenticated: this.authenticated,
        },
        events: {
          send: () => {
            this.$emit("logout");
          },
        },
      });
    },

    hideSideBar() {
      this.$emit("hideSideBar");
    },
    // navSettings(e) {
    //   this.$router.push("/settings");
    // }
  },
};
</script>

<style>
</style>
