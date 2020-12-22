<template>
  <div>
    <b-table :data="contacts">
      <template slot-scope="props">
        <b-table-column label="#" field="#" width="50" centered>
          {{ props.index + 1 }}
        </b-table-column>

        <b-table-column label="Name">
          <nuxt-link :to="'/contact/' + props.row.id">{{
            props.row.name
          }}</nuxt-link>
        </b-table-column>

        <b-table-column label="Email">
          <nuxt-link :to="'/contact/' + props.row.id">{{
            props.row.email
          }}</nuxt-link>
        </b-table-column>

        <b-table-column label="Subject">
          <nuxt-link :to="'/contact/' + props.row.id">{{
            props.row.subject
          }}</nuxt-link>
        </b-table-column>

        <b-table-column label="Date">
          <nuxt-link :to="'/contact/' + props.row.id">{{
            formatDate(props.row.date)
          }}</nuxt-link>
        </b-table-column>

        <b-table-column label=" " class="has-text-right">
          <nuxt-link
            :to="'/contact/' + props.row.id"
            class="mdi mdi-eye icobtn"
          />

          <a
            @click.prevent="deleteContact(props.row.id)"
            href="#"
            v-if="editAccess"
            class="mdi mdi-delete icobtn"
          />
        </b-table-column>
      </template>

      <template slot="empty">
        <section class="section">
          <div class="content has-text-grey has-text-centered">
            <p>
              <i class="mdi mdi-information-outline mdi-48px" />
            </p>
            <p class="is-size-5">No Contact Available</p>
          </div>
        </section>
      </template>
    </b-table>
  </div>
</template>

<script>
import DeleteModal from "@/components/widgets/DeleteModal";
import { mapState } from "vuex";

export default {
  data() {
    return {
      pageInfo: {
        title: "Contacts",
        show: false,
      },
      deleteInfo: {
        title: "Delete Contact",
        text: "Are you sure you want to delete this enquiry?",
      },
    };
  },

  async asyncData({ store }) {
    await store.dispatch("contacts/getContacts");
  },

  mounted() {
    this.$store.dispatch("changeNavInfo", this.pageInfo);
  },

  computed: {
    ...mapState("contacts", ["contacts"]),
    ...mapState(["editAccess"]),
  },

  methods: {
    formatDate(val) {
      val = new Date(val);
      let date = "";
      let month = val.getMonth() + 1;
      date = val.getUTCDate() + "/" + month + "/" + val.getUTCFullYear();
      return date;
    },

    async deleteContact(id) {
      this.$modal.open({
        hasModalCard: true,
        parent: this,
        component: DeleteModal,
        props: {
          modalDetails: this.deleteInfo,
        },
        events: {
          send: async (data) => {
            let res = await this.$store.dispatch("contacts/deleteContact", id);
            if (res == 1) {
              this.$snackbar.open({
                message: "Successfully Deleted Contact.",
                type: "is-success",
                position: "is-top",
              });
              return;
            }
            this.$snackbar.open({
              message: "Error Deleting Contact.",
              type: "is-danger",
              position: "is-top",
            });
          },
        },
      });
    },
  },
};
</script>

<style>
</style>
