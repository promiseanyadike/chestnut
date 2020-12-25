<template>
  <div class="page_unit">
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

          <b-table-column label="Manage About Page" v-slot:default="props">
            <nuxt-link :to="'/about/' + props.row.id">{{
              props.row.title
            }}</nuxt-link>
          </b-table-column>

          <b-table-column
            label=" "
            class="has-text-right"
            v-slot:default="props"
          >
            <nuxt-link
              :to="'/about/' + props.row.id"
              class="mdi mdi-eye icobtn"
            />

            <!-- v-if="editAccess" to hide a button -->
          </b-table-column>
        </template>

        <template slot="empty">
          <section class="section">
            <div class="content has-text-grey has-text-centered">
              <p>
                <i class="mdi mdi-information-outline mdi-48px" />
              </p>
              <p class="is-size-5">No About Page Available</p>
            </div>
          </section>
        </template>
      </b-table>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  data() {
    return {
      placeholder: "Search By About Content",
      link: "/about/create",
      search: "",
      pageInfo: {
        title: "Manage About Page",
        show: false,
      },
    };
  },

  mounted() {
    this.$store.dispatch("changeNavInfo", this.pageInfo);
  },

  async asyncData({ store }) {
    await store.dispatch("about/getPracticeAreas");
  },

  computed: {
    ...mapState("about", ["practices"]),
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
      this.$router.push(`/about/${val.id}`);
    },
  },
};
</script>

<style>
</style>
