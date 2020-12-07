<template>
  <div>
    <quill-editor
      :value="value"
      :disabled="disabled"
      @change="handleInput($event)"
      placeholder=""
      :options="editorOption"
    />
  </div>
</template>

<script>
import QuillEditor from "@/components/widgets/QuillEditor.vue";

export default {
  components: { QuillEditor },

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
          toolbar: [
            ["bold", "italic", "underline", "strike"],
            [{ list: "ordered" }, { list: "bullet" }],
            [{ header: 1 }, { header: 2 }],
            [{ color: [] }],
          ],
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

<style>
</style>