<template>
  <div>
    <section class="carousel-dropdown">
      <b-collapse
        class="card"
        v-for="(about, index) in contents.slice(0, 4)"
        :key="index"
        :class="displayError ? 'custom-help' : ''"
        :open="isOpen == index"
        @open="
          isOpen = index;
          displayError = false;
        "
        @close="displayError = false"
      >
        <div
          slot="trigger"
          slot-scope="props"
          class="card-header"
          role="button"
        >
          <p class="card-header-title">section: {{ index + 1 }}</p>
          <a class="card-header-icon">
            <b-icon :icon="props.open ? 'menu-down' : 'menu-up'"></b-icon>
          </a>
        </div>

        <div class="card-content">
          <div class v-if="!edit && total > 1">
            <div class="level">
              <div class="level-right level-item">
                <button
                  class="button is-danger is-small has-text-right is-outlined print-invoice-button"
                  @click="delSection(content)"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
          <div class="columns">
            <div class="column">
              <b-field
                label="Title"
                custom-class="is-small"
                :type="errors.has('Title') ? 'is-danger' : ''"
                :message="errors.first('Title')"
              >
                <b-input
                  :disabled="edit"
                  v-model="about.title"
                  expanded
                  name="Title"
                  placeholder="Title"
                  v-validate="'required'"
                />
              </b-field>
            </div>
          </div>

          <div class="columns">
            <div class="column">
              <b-field
                label="Content"
                custom-class="is-small"
                :type="errors.has('Content') ? 'is-danger' : ''"
                :message="errors.first('Content')"
              >
                <quill-editor
                  class="editQuill"
                  v-model="about.content"
                  :class="
                    edit
                      ? 'quill_disabled'
                      : 'quill-editor is-disabled ql-container ql-snow ql-disabled'
                  "
                  :disabled="edit"
                  data-vv-as="Content"
                  :name="'Content'"
                  placeholder="Content"
                  v-validate="'required'"
                />
              </b-field>
            </div>
          </div>
        </div>
      </b-collapse>

      <span class="displayDanger help is-danger" v-if="displayError">
        There is pending data thats needs to save.
      </span>
    </section>

    <section class="carousel-dropdown">
      <b-collapse
        class="card"
        v-for="(about, index) in contents.slice(4, 6)"
        :key="index"
        :class="displayError ? 'custom-help' : ''"
        :open="isOpen == index"
        @open="
          isOpen = index;
          displayError = false;
        "
        @close="displayError = false"
      >
        <div
          slot="trigger"
          slot-scope="props"
          class="card-header"
          role="button"
        >
          <p class="card-header-title">section: {{ index + 5 }}</p>
          <a class="card-header-icon">
            <b-icon :icon="props.open ? 'menu-down' : 'menu-up'"></b-icon>
          </a>
        </div>

        <div class="card-content">
          <div class v-if="!edit && total > 1">
            <div class="level">
              <div class="level-right level-item">
                <button
                  class="button is-danger is-small has-text-right is-outlined print-invoice-button"
                  @click="delSection(content)"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
          <div class="columns">
            <div class="column">
              <b-field
                label="Title"
                custom-class="is-small"
                :type="errors.has('Title') ? 'is-danger' : ''"
                :message="errors.first('Title')"
              >
                <b-input
                  :disabled="edit"
                  v-model="about.title"
                  expanded
                  name="Title"
                  placeholder="Title"
                  v-validate="'required'"
                />
              </b-field>
            </div>
          </div>

          <div class="columns">
            <div class="column">
              <image-upload
                v-model="about.images"
                label="About Image"
                @image="isImageValid($event)"
                :readonly="edit"
              />
            </div>
          </div>
          <div class="columns">
            <div class="column">
              <b-field
                label="Content"
                custom-class="is-small"
                :type="errors.has('Content') ? 'is-danger' : ''"
                :message="errors.first('Content')"
              >
                <quill-editor
                  class="editQuill"
                  v-model="about.content"
                  :class="
                    edit
                      ? 'quill_disabled'
                      : 'quill-editor is-disabled ql-container ql-snow ql-disabled'
                  "
                  :disabled="edit"
                  data-vv-as="Content"
                  :name="'Content'"
                  placeholder="Content"
                  v-validate="'required'"
                />
              </b-field>
            </div>
          </div>
        </div>
      </b-collapse>

      <span class="displayDanger help is-danger" v-if="displayError">
        There is pending data thats needs to save.
      </span>
    </section>

    <section>
      <b-collapse
        class="card"
        v-for="(about, index) in contents.slice(6, 7)"
        :key="index"
        :class="displayError ? 'custom-help' : ''"
        :open="isOpen == index"
        @open="
          isOpen = index;
          displayError = false;
        "
        @close="displayError = false"
      >
        <div
          slot="trigger"
          slot-scope="props"
          class="card-header"
          role="button"
        >
          <p class="card-header-title">section: {{ index + 7 }}</p>
          <a class="card-header-icon">
            <b-icon :icon="props.open ? 'menu-down' : 'menu-up'"></b-icon>
          </a>
        </div>

        <div class="card-content">
          <div class v-if="!edit && total > 1">
            <div class="level">
              <div class="level-right level-item">
                <button
                  class="button is-danger is-small has-text-right is-outlined print-invoice-button"
                  @click="delSection(content)"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
          <div class="columns">
            <div class="column">
              <b-field
                label="Title"
                custom-class="is-small"
                :type="errors.has('Title') ? 'is-danger' : ''"
                :message="errors.first('Title')"
              >
                <b-input
                  :disabled="edit"
                  v-model="about.title"
                  expanded
                  name="Title"
                  placeholder="Title"
                  v-validate="'required'"
                />
              </b-field>
            </div>
          </div>

          <div class="columns">
            <div class="column">
              <b-field
                label="Content"
                custom-class="is-small"
                :type="errors.has('Content') ? 'is-danger' : ''"
                :message="errors.first('Content')"
              >
                <quill-editor
                  class="editQuill"
                  v-model="about.content"
                  :class="
                    edit
                      ? 'quill_disabled'
                      : 'quill-editor is-disabled ql-container ql-snow ql-disabled'
                  "
                  :disabled="edit"
                  data-vv-as="Content"
                  :name="'Content'"
                  placeholder="Content"
                  v-validate="'required'"
                />
              </b-field>
            </div>
          </div>
        </div>
      </b-collapse>

      <span class="displayDanger help is-danger" v-if="displayError">
        There is pending data thats needs to save.
      </span>
    </section>
  </div>
</template> 

<script>
import QuillEditor from "@/components/widgets/QuillEditor.vue";
import ImageUpload from "@/components/widgets/ImageUpload.vue";
import { copy } from "@/utils/helpers";

export default {
  components: { QuillEditor, ImageUpload },
  data() {
    return {
      isOpen: false,
      displayError: false,
      availOption: [
        { id: 1, name: "Yes" },
        { id: 2, name: "No" },
      ],
      isImage: false,
    };
  },
  props: {
    edit: {
      type: Boolean,
      default: () => false,
    },
    total: {
      type: Number,
      default: () => 0,
    },
    // content: {
    //   type: Object,
    //   default: () => {}
    // },
    contents: {
      type: Array,
      default: () => [],
    },
    val: {
      type: Object,
      default: () => {},
    },
    index: {
      type: Number,
      default: () => 0,
    },
  },
  methods: {
    delSection(obj) {
      this.$emit("deleteSection", obj);
    },

    async isValid() {
      let result = await this.$validator.validateAll();
      if (!result) {
        return;
      }
      this.$emit("input", copy(this.value));
      return true;
    },

    isImageValid(validity) {
      this.isImage = validity;
    },

    async validate() {
      this.displayError = false;

      if (!this.isImage) {
        this.displayError = true;
        return false;
      }
      let result = await this.$validator.validateAll();
      if (!result) {
        this.displayError = true;
        return false;
      }
      return true;
      // return result ? true : false;
      // if (result) {
      //   return true;
      // }
    },
    //     arrayToObject(arr) {
    //     var obj = {};
    //     for (var i = 0; i < arr.length; ++i){
    //         obj[i] = arr[i];
    //     }
    //     return obj;
    // },
  },
  // convert arrays to object
  // computed: {
  //   convertArray() {
  //     let y = this.content;
  //     let x = this.arrayToObject(y);//{0: "red", 1: "blue", 2: "green"}
  //     console.log(x)
  //     console.log(x)
  //   return x
  //   }
  // }
};
</script>

<style>
</style>