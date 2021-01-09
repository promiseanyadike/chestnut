<template>
  <div class="page_unit">
    <div>
      <h1 class="general-info-heading">Service Area Information</h1>
    </div>

    <div>
      <b-field
        label="Title"
        custom-class="is-small"
        :type="errors.has('title') ? 'is-danger' : ''"
        :message="errors.first('title')"
      >
        <b-input
          v-model="form.title"
          expanded
          name="title"
          placeholder="Title"
          v-validate="'required'"
        />
      </b-field>

      <!-- <b-field
        label="Title"
        custom-class="is-small"
        :type="errors.has('title') ? 'is-danger' : ''"
        :message="errors.first('title')"
      >
        <quill-editor
          v-model="form.title"
          v-validate="'required'"
          name="title"
        />
      </b-field> -->

      <b-field
        label="Content"
        custom-class="is-small"
        :type="errors.has('content') ? 'is-danger' : ''"
        :message="errors.first('content')"
      >
        <quill-editor
          v-model="form.content"
          v-validate="'required'"
          name="content"
        />
      </b-field>

      <image-upload
        v-model="form.image"
        label="Image"
        @image="isImageValid($event)"
      />
    </div>

    <div class="create-button-space">
      <button
        class="button create-button is-fullwidth has-background-grey has-text-white"
        :class="loading"
        @click="createPracticeArea"
      >
        Create a Service Area
      </button>
    </div>
  </div>
</template>

<script>
import QuillEditor from "@/components/widgets/QuillEditor.vue";
import ImagePreview from "@/components/widgets/ImagePreview.vue";
import ImageUpload from "@/components/widgets/ImageUpload.vue";
import { mapState } from "vuex";

export default {
  components: { QuillEditor, ImageUpload },

  data() {
    return {
      pageInfo: {
        title: "Create Service Area",
        show: true,
        link: "/services",
      },
      form: {
        title: "",
        content: "",
        image: {},
      },
      isImage: false,
      loading: "",
    };
  },

  computed: {
    ...mapState(["editAccess"]),
  },

  mounted() {
    this.$store.dispatch("changeNavInfo", this.pageInfo);
  },

  methods: {
    async createPracticeArea() {
      let result = await this.$validator.validateAll();
      if (!this.isImage) {
        this.$buefy.snackbar.open({
          message: "Please Upload an Image.",
          type: "is-danger",
          position: "is-top",
        });
        return;
      }
      if (result && this.isImage) {
        this.loading = "is-loading";
        let practice = _.extend({}, this.form);
        let res = await this.$store.dispatch(
          "service/createPracticeArea",
          practice
        );
        if (res == 1) {
          this.$buefy.snackbar.open({
            message: "Successfully Created Practice Area.",
            type: "is-success",
            position: "is-top",
          });
          this.loading = "";
          setTimeout(() => this.$router.push("/services"), 1000);
          return;
        }
        this.$beufy.snackbar.open({
          message: "Error Creating Area Of Service.",
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
