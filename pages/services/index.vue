<template>
  <div class="page_unit">
    <div class="new-button">
      <nuxt-link :to="link">
        <a class="button create-button is-success"> {{ title }}</a>
      </nuxt-link>
    </div>

    <div>
      <b-table :data="practices">
        <template>
          <b-table-column
            label="#"
            field="#"
            width="50"
            centered
            v-slot="props"
          >
            {{ props.index + 1 }}
          </b-table-column>

          <b-table-column label="Our Services" v-slot:default="props">
            <nuxt-link :to="'/services/' + props.row.id">{{
              props.row.Title
            }}</nuxt-link>
          </b-table-column>

          <b-table-column
            label=" "
            class="has-text-right"
            v-slot:default="props"
          >
            <nuxt-link
              :to="'/services/' + props.row.ID"
              class="mdi mdi-eye icobtn"
            />

            <!-- v-if="editAccess" to hide a button -->
            <a
              @click.prevent="deletePrac(props.row.ID)"
              href="#"
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
              <p class="is-size-5">No Service Area Available</p>
            </div>
          </section>
        </template>
      </b-table>
    </div>
  </div>
</template>

<script>
import DeleteModal from "@/components/widgets/DeleteModal";
import { mapState } from "vuex";

export default {
  data() {
    return {
      placeholder: "Search By Service Area",
      title: "Add Service",
      link: "/services/create",
      search: "",
      pageInfo: {
        title: "Services",
        show: false,
      },

      deleteInfo: {
        title: "Delete Service",
        text: "Are you sure you want to delete this service?",
      },
    };
  },

  mounted() {
    this.$store.dispatch("changeNavInfo", this.pageInfo);
  },

  async asyncData({ store }) {
    await store.dispatch("service/getPracticeAreas");
  },

  computed: {
    ...mapState("service", ["practices"]),
    ...mapState(["editAccess"]),

    practiceAreas() {
      let data = _.extend([], this.practices);
      return _.filter(data, (practice) => {
        let search = this.search.toLowerCase();
        return (
          practice &&
          practice.title &&
          practice.title.toLowerCase().match(search)
        );
      });
    },
  },

  methods: {
    searchPracticeArea(val) {
      this.$router.push(`/services/${val.id}`);
    },

    async deletePrac(id) {
      this.$buefy.modal.open({
        hasModalCard: true,
        parent: this,
        component: DeleteModal,
        props: {
          modalDetails: this.deleteInfo,
        },
        events: {
          send: async (data) => {
            let res = await this.$store.dispatch("service/deletePractice", id);
            if (res == 1) {
              this.$buefy.snackbar.open({
                message: "Successfully Deleted Service Area.",
                type: "is-success",
                position: "is-top",
              });
              setTimeout(() => this.$router.push("/services"), 1000);
              return;
            }
            this.$buefy.snackbar.open({
              message: "Error Deleting Service Area.",
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
