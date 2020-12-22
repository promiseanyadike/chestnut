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
          class="button create-button edit-button has-background-grey-light"
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
        label="Carousel Title 1"
        custom-class="is-small"
        :type="errors.has('header') ? 'is-danger' : ''"
        :message="errors.first('header')"
      >
        <quill-editor
          v-model="value.attributes.carousel[0].content"
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
        v-model="value.attributes.carousel[0].image"
        @image="isImageValid($event)"
        label="Banner Image 1 (1368 x 508)"
        :readonly="edit"
      />

      <b-field
        label="Carousel Title 2"
        custom-class="is-small"
        :type="errors.has('header') ? 'is-danger' : ''"
        :message="errors.first('header')"
      >
        <quill-editor
          v-model="value.attributes.carousel[1].content"
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
        v-model="value.attributes.carousel[1].image"
        @image="isImageValid1($event)"
        label="Banner Image 2 (1368 x 508)"
        :readonly="edit"
      />

      <b-field
        label="Carousel Title 3"
        custom-class="is-small"
        :type="errors.has('header') ? 'is-danger' : ''"
        :message="errors.first('header')"
      >
        <quill-editor
          v-model="value.attributes.carousel[2].content"
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
        v-model="value.attributes.carousel[2].image"
        @image="isImageValid2($event)"
        label="Banner Image 3"
        :readonly="edit"
      />

      <b-field
        label="Header Title"
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

      <b-field
        label="Header Content"
        custom-class="is-small"
        :type="errors.has('header') ? 'is-danger' : ''"
        :message="errors.first('header')"
      >
        <quill-editor
          v-model="value.attributes.header.content"
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
        @image="isImageValid3($event)"
        label="Banner Image 3"
        :readonly="edit"
      />

      <!-- <div
        class="services"
        v-for="(services, i) in page.attributes.services"
        :key="i"
      >
        <b-field
          label="Services Title"
          custom-class="is-small"
          :type="errors.has('header') ? 'is-danger' : ''"
          :message="errors.first('header')"
        >
          <quill-editor
            v-model="services.title"
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

        <b-field
          label="Services Content"
          custom-class="is-small"
          :type="errors.has('header') ? 'is-danger' : ''"
          :message="errors.first('header')"
        >
          <quill-editor
            v-model="services.content"
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
      </div> -->

      <!-- <b-field
        label="Section Content"
        custom-class="is-small"
        :type="errors.has('header') ? 'is-danger' : ''"
        :message="errors.first('header')"
      >
        <quill-editor
          v-model="value.attributes.section.title"
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
      </b-field> -->

      <!-- <image-upload
        v-model="value.attributes.page[0].image"
        @image="isImageValid3($event)"
        label="Banner Image (1368 x 508)"
        :readonly="edit"
      />

      <image-upload
        v-model="value.attributes.page[1].image"
        @image="isImageValid4($event)"
        label="Banner Image (1368 x 508)"
        :readonly="edit"
      />

      <image-upload
        v-model="value.attributes.page[2].image"
        @image="isImageValid5($event)"
        label="Banner Image (1368 x 508)"
        :readonly="edit"
      />

      <image-upload
        v-model="value.attributes.page[3].image"
        @image="isImageValid6($event)"
        label="Banner Image (1368 x 508)"
        :readonly="edit"
      />

      <image-upload
        v-model="value.attributes.page[4].image"
        @image="isImageValid7($event)"
        label="Banner Image (1368 x 508)"
        :readonly="edit"
      />

      <image-upload
        v-model="value.attributes.page[5].image"
        @image="isImageValid8($event)"
        label="Banner Image (1368 x 508)"
        :readonly="edit"
      />

      <image-upload
        v-model="value.attributes.page[6].image"
        @image="isImageValid9($event)"
        label="Banner Image (1368 x 508)"
        :readonly="edit"
      />

      <image-upload
        v-model="value.attributes.page[7].image"
        @image="isImageValid10($event)"
        label="Banner Image (1368 x 508)"
        :readonly="edit"
      />

      <image-upload
        v-model="value.attributes.page[8].image"
        @image="isImageValid11($event)"
        label="Banner Image (1368 x 508)"
        :readonly="edit"
      /> -->

      <!-- <div class="meta-info">
        <div class="is-flex">
          <h2 class="general-info-heading" style="width: 50%;">Page Meta Info</h2>

          <div class="has-text-right" style="width: 50%;">
            <button class="button create-button edit-button" @click="addMeta">Add Meta</button>
          </div>
        </div>
        <b-table :data="value.attributes.meta">
          <template slot-scope="props">
            <b-table-column label="#" field="#" width="50" centered>{{ props.index+1 }}</b-table-column>

            <b-table-column label="Attribute">{{ props.row }}</b-table-column>

            <b-table-column>
              <i @click="deleteMeta(props.row)" class="mdi mdi-delete" />
            </b-table-column>
          </template>
        </b-table>
      </div>-->
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
      isImage1: false,
      isImage2: false,
      isImage3: false,
    };
  },

  async asyncData({ store }) {
    let pageId = store.state.pages.pageId;
    if (!_.isNil(pageId)) {
      await store.dispatch("pages/getPage", pageId);
    } else {
      await store.dispatch("pages/getPage", 1);
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

    isImageValid1(validity) {
      this.isImage1 = validity;
    },

    isImageValid2(validity) {
      this.isImage2 = validity;
    },

    isImageValid3(validity) {
      this.isImage3 = validity;
    },

    async save() {
      if (!this.isImage && !this.isImage1 && !this.isImage2 && !this.isImage3) {
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
            message: "Successfully Edited Home Page.",
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
  padding-bottom: 3rem;
}
</style>