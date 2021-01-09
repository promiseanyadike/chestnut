<template>
  <div class="page_unit">
    <div class="columns">
      <div class="column">
        <h1 class="general-info-heading">About Page Information</h1>
      </div>
      <div class="column has-text-right">
        <button
          class="button create-button edit-button has-background-grey has-text-white"
          v-if="edit"
          @click="toggleEdit"
        >
          Edit
        </button>

        <button
          class="button create-button edit-button is-danger"
          v-if="!edit"
          @click="toggleEdit"
        >
          Cancel
        </button>

        <button
          class="button create-button save-button is-primary"
          :class="loading"
          @click="editPractice"
          v-if="!edit"
        >
          Save
        </button>
      </div>
    </div>

    <div>
      <b-field
        label="Title"
        custom-class="is-small"
        :type="errors.has('title') ? 'is-danger' : ''"
        :message="errors.first('title')"
      >
        <b-input
          :disabled="edit"
          v-model="value.title"
          expanded
          name="title"
          placeholder="Title"
          v-validate="'required'"
        />
      </b-field>

      <b-field
        label="Content"
        custom-class="is-small"
        :type="errors.has('content') ? 'is-danger' : ''"
        :message="errors.first('content')"
      >
        <quill-editor
          :class="
            edit
              ? 'quill_disabled'
              : 'quill-editor is-disabled ql-container ql-snow ql-disabled'
          "
          :disabled="edit"
          name="content"
          v-validate="'required'"
          v-model="value.content"
        />
      </b-field>

      <image-upload
        v-model="value.image"
        label="Image"
        @image="isImageValid($event)"
        :readonly="edit"
      />
    </div>
  </div>
</template>


<script>
import { copy } from "@/utils/helpers";
import { mapState } from "vuex";
import QuillEditor from "@/components/widgets/QuillEditor.vue";
import ImageUpload from "@/components/widgets/ImageUpload.vue";

export default {
  components: { QuillEditor, ImageUpload },

  data() {
    return {
      pageInfo: {
        title: "View Practice",
        show: true,
        link: "/about",
      },
      edit: true,
      loading: "",
      isImage: false,
    };
  },

  async asyncData({ store, params }) {
    await store.dispatch("about/getPracticeArea", params.id);

    let value = copy(store.state.about.practice);

    return { value };
  },

  mounted() {
    this.$store.dispatch("changeNavInfo", this.pageInfo);
  },

  computed: {
    ...mapState("about", ["practice"]),
    ...mapState(["editAccess"]),
  },

  methods: {
    toggleEdit() {
      this.edit = !this.edit;
    },

    async editPractice() {
      let result = await this.$validator.validateAll();
      if (!this.isImage) {
        this.$buefy.snackbar.open({
          message: "Please Upload an Image.",
          type: "is-danger",
          position: "is-top",
        });
        return;
      }
      if (result) {
        this.loading = "is-loading";
        let data = _.extend({}, this.value);
        let res = await this.$store.dispatch("about/editPractice", {
          params: data,
          id: data.id,
        });
        if (res == 1) {
          this.$buefy.snackbar.open({
            message: "Successfully Edited Content.",
            type: "is-success",
            position: "is-top",
          });
          this.loading = "";
          setTimeout(() => this.$router.push("/about"), 1000);
          return;
        }
        this.$buefy.snackbar.open({
          message: "Error Editing Content.",
          type: "is-danger",
          position: "is-top",
        });
        this.loading = "";
        return;
      }
    },

    isImageValid(validity) {
      this.isImage = validity;
    },
  },
};
</script>

<style>
</style>
