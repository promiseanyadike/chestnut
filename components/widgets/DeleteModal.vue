<template>
  <div class="delete__modal">
    <div class="modal-card">
      <header class="modal-card-head">
        <p class="modal-card-title">{{ modalDetails.title }}</p>
      </header>
      <section class="modal-card-body">
        <div class="has-text-centered delete-modal-body">
          <h1 class="delete-modal-text">{{ modalDetails.text }}</h1>
        </div>
      </section>
      <div class="modal-card-foot">
        <button class="button is-success is-fullwidth" @click="confirm">
          Yes
        </button>
        <button class="button is-danger is-fullwidth" @click="closeModal">
          No
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    modalDetails: {
      type: Object,
      default() {
        return {};
      },
    },
  },

  methods: {
    async confirm() {
      this.$emit("send");
      this.$parent.close();
    },

    closeModal() {
      this.$parent.close();
    },
  },
};
</script>

<style>
</style>
