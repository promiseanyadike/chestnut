<template>
  <div class="home_field">
    <div class="columns">
      <div class="column">
        <h1 class="general-info-heading">Home Page</h1>
      </div>
      <div class="top-right-item">
        <nuxt-link
          to="/pages"
          aria-current="page"
          v-if="!edit"
          @click="toggleEdit"
        >
          <button class="button is-danger">Cancel</button>
        </nuxt-link>
        <button
          class="button create-button edit-button has-background-grey-light has-text-white"
          v-if="edit"
          @click="toggleEdit"
        >
          Edit
        </button>
        <button
          class="button create-button save-button is-success"
          :class="loading"
          @click="save"
          v-if="!edit"
        >
          Save
        </button>
      </div>
    </div>

    <div>
      <b-field
        label="Banner Header Title"
        custom-class="is-small"
        :type="errors.has('header') ? 'is-danger' : ''"
        :message="errors.first('header')"
      >
        <quill-editor
          v-model="value.attributes.header.title"
          :class="
            edit
              ? 'quill_disabled'
              : 'quill-editor is-disabled ql-container ql-snow ql-disabled'
          "
          :disabled="edit"
          name="header"
          placeholder="Header Content"
          v-validate="'required'"
        />
      </b-field>

      <image-upload
        v-model="value.attributes.header.image"
        @image="isImageValid($event)"
        label="Banner Image 1 (1368 x 508)"
        :readonly="edit"
      />
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { copy, Notification } from "@/utils/helpers";
import QuillEditor from "@/components/widgets/QuillEditor.vue";
import ImageUpload from "@/components/widgets/ImageUpload.vue";
// import mixin from "@/mixins/meta";

export default {
  components: { QuillEditor, ImageUpload },

  //   mixins: [mixin],

  data() {
    return {
      pageInfo: {
        title: "Home Page",
        show: true,
        link: "/pages",
      },
      edit: true,
      loading: "",
      isImage: false,
    };
  },

  async asyncData({ store }) {
    let pageId = store.state.pages.pageId;
    if (!_.isNil(pageId)) {
      await store.dispatch("pages/getPage", pageId);
    } else {
      await store.dispatch("pages/getPage", 5);
    }

    let value = copy(store.state.pages.page);
    console.log(value);

    return { value };
  },

  // mounted() {
  //   this.$store.dispatch("changeNavInfo", this.pageInfo);
  // },

  computed: {
    ...mapState("pages", ["page"]),

    ...mapState(["editAccess"]),

    message(state) {
      state = this.value.attributes.specific;
      return state;
    },
  },

  methods: {
    toggleEdit() {
      this.edit = !this.edit;
    },

    isImageValid(validity) {
      this.isImage = validity;
    },

    async save() {
      if (!this.isImage) {
        this.$buefy.snackbar.open({
          message: "Please Upload an Image.",
          type: "is-danger",
          position: "is-top",
        });
        return;
      }
      let result = await this.$validator.validateAll();
      if (result) {
        this.loading = "is-loading";
        let page = _.extend({}, this.value);
        let res = await this.$store.dispatch("pages/editPage", {
          params: page,
          id: page.id,
        });
        console.log(res);
        if (res) {
          this.$buefy.snackbar.open({
            message: "Successfully Edited About Page.",
            type: "is-success",
            position: "is-top",
          });
          this.loading = "";
          setTimeout(() => this.$router.push("/pages"), 1000);
          return;
        }
        this.$buefy.snackbar.open({
          message: "Error Editing Home Page.",
          type: "is-danger",
          position: "is-top",
        });
        this.loading = "";
        return;
      }
    },
  },
};
</script>

<style>
p {
  padding-bottom: 0.75rem;
}
</style>