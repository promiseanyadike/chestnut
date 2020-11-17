<template>
  <div
    class="billboardComp"
    :style="{
      height: param.height,
      'background-image': ` linear-gradient(rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.75)), url(${param.image})`,
    }"
  >
    <slot />
    <div class="captions">
      <div class="leftCaption" v-html="param.left" />
      <div class="rightCaption" v-html="param.right"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "LayoutBillboard",
  props: {
    param: {
      type: Object,
      default() {
        return {
          height: "300px",
          image: "/img/logo.jpg",
          left: "404",
          right: "",
        };
      },
    },
  },
};
</script>


