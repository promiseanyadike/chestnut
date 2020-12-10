<template>
  <div>
    <quill-editor
      :value="value"
      :disabled="disabled"
      @change="handleInput($event)"
      placeholder
      :options="editorOption"
    />
  </div>
</template>

<script>
import "quill/dist/quill.core.css";
import "quill/dist/quill.snow.css";
import "quill/dist/quill.bubble.css";

import { quillEditor } from "vue-quill-editor";

export default {
  components: {
    quillEditor,
  },
  props: {
    disabled: {
      type: Boolean,
      default: false,
    },

    value: {
      type: String,
      default: "",
    },

    name: {
      type: String,
      default: "",
    },
  },

  data() {
    return {
      editorOption: {
        modules: {
          toolbar: [["bold", "italic", "underline", "strike"], ["clean"]],
        },
      },
      data: "",
      hasValue: true,
    };
  },

  computed: {
    // hasValue(){
    //   return _.isEmpty(this.value);
    // }
  },

  methods: {
    handleInput(e) {
      this.$emit("input", e.html);
      this.hasValue = !_.isEmpty(e.html);
    },
  },
};
</script>

<style></style>
