<template>
  <div>
    <!-- <div
      class="new-button"
      v-if="editAccess">
      <button
        class="button create-button"
        @click="snippets">Scripts</button>
    </div>-->

    <b-table :data="pages" class="home_page">
      <template>
        <b-table-column
          label="#"
          field="#"
          width="50"
          centered
          v-slot="props"
          >{{ props.index + 1 }}</b-table-column
        >

        <b-table-column label="Page Name" v-slot:default="props">
          <nuxt-link :to="'/pages' + props.row.route">
            <p @click="setPageId(props.row.id)">{{ props.row.name }}</p>
          </nuxt-link>
        </b-table-column>

        <b-table-column label="#" class="has-text-right" v-slot:default="props">
          <nuxt-link :to="'/pages' + props.row.route">
            <i class="mdi mdi-eye icobtn" @click="setPageId(props.row.id)" />
          </nuxt-link>
        </b-table-column>
      </template>

      <template slot="empty">
        <section class="section">
          <div class="content has-text-grey has-text-centered">
            <p>
              <i class="mdi mdi-information-outline mdi-48px" />
            </p>
            <p class="is-size-5">No Page Available</p>
          </div>
        </section>
      </template>
    </b-table>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";
// import CreditModal from '@/components/widgets/CreditModal.vue'

export default {
  data() {
    return {
      pageInfo: {
        title: "Pages",
        show: false,
      },
    };
  },

  async asyncData({ store }) {
    await Promise.all([
      store.dispatch("pages/getPageList"),
      // store.dispatch("pages/getCredits")
    ]);
  },

  mounted() {
    this.$store.dispatch("changeNavInfo", this.pageInfo);
  },

  computed: {
    ...mapState("pages", ["pages"]),
    ...mapGetters("pages", ["getVisiblePages"]),
    ...mapState(["editAccess"]),
  },

  methods: {
    async setPageId(id) {
      await this.$store.dispatch("pages/setPageId", id);
    },

    // snippets() {
    //   this.$router.push("/pages/snippets");
    // }

    // showCredits(){
    //   this.$modal.open({
    //     hasModalCard: true,
    //     parent: this,
    //     component: CreditModal,
    //     events: {
    //       send: async credits => {
    //         let res = await this.$store.dispatch("pages/addCredit");
    //         if (res) {
    //           this.$snackbar.open({
    //             message: "Successfully Edited Credits.",
    //             type: "is-success",
    //             position: "is-top"
    //           });
    //           return;
    //         }
    //         this.$snackbar.open({
    //           message: "Error Editing Credits.",
    //           type: "is-danger",
    //           position: "is-top"
    //         });
    //       }
    //     }
    //   });
    // }
  },
};
</script>

<style>
</style>