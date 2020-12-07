<template>
  <div class="Logout-modal">
    <div class="modal-card" style="width: auto">
      <header class="modal-card-head">
        <span>Logout</span>
        <b-icon icon="account-lock"></b-icon>
        <!-- <p class="modal-card-title">Logout</p> -->
      </header>

      <section class="modal-card-body">
        <div class="delete-modal-body has-text-centered">
          <h1 class="delete-modal-text">Are you sure you want to logout ?</h1>
        </div>
      </section>

      <div class="modal-card-foot">
        <button class="button is-success is-fullwidth" @click="send">
          Logout
        </button>

        <!-- <button class="button is-danger is-fullwidth" @click="$parent.close()">No</button> -->
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { Notification } from "@/utils/helpers";

export default {
  props: {
    authenticated: {
      type: Boolean,
      default: false,
    },
  },

  methods: {
    async send() {
      this.$emit("send");
      this.$parent.close();
      //      try {
      //   let res = await this.$store.dispatch("auth/logout");
      //   console.log(res);
      //     if (res.done == true) {
      //      this.$store.commit ('auth/logout')
      //   } else if (res.done == false ) {
      //     Notification(this, `Error Logging Out, Please Try Again`, "is-danger");
      //   }
      //   this.$router.push( { path: '/'} );
      // }
      // catch (error) {
      //   console.log ("Error failed to log out", error)
      // }
      // if (this.authenticated) {

      // } else {
      //   Notification(this, `Error Logging Out, Please Try Again`, "is-danger");
      // }
    },
  },
};
</script>

<style>
</style>
