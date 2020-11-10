<template>
  <div
    class="columns is-gapless paragraphBlockComp"
    :id="id"
    :class="{ reverse: reverse }"
  >
    <div class="column">
      <div class="paragraphBlock">
        <h3 class="paragraphBlock--title">{{ title }}</h3>
        <!-- <p class="paragraphBlock--subtitle">{{ subtitle }}</p> -->
        <div class="paragraphBlock--content">
          <div v-html="content" />
        </div>
      </div>
    </div>

    <div class="column is-hidden-mobile">
      <div class="paragraphImage" :style="{ 'background-image': url }" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: "",
    },
    // subtitle: {
    //   type: String,
    //   default: "",
    // },
    content: {
      type: String,
      default: "",
    },
    image: {
      type: String,
      default: "",
    },
    id: {
      type: Number,
      default: 0,
    },
    reverse: {
      type: Boolean,
      default: false,
    },
  },

  computed: {
    url() {
      return `url(${this.image})`;
    },
  },
};
</script>

<style lang="scss">
.paragraphBlockComp.reverse {
  flex-direction: row-reverse;
}
.paragraphBlock--content {
  color: red;
}
</style>


