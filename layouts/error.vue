<template>
  <section class="section hero is-medium">
    <div class="container has-text-centered">
      <div v-if="error.statusCode === 404">
        <h1 class="has-text-black" style="font-size: 100px; letter-spacing:20px;">404</h1>
        <h2 class="has-text-black is-size-3 is-size-4-mobile">Page not found</h2>
      </div>
      <h1 v-else>An error occurred</h1>
      <nuxt-link to="/" class="has-text-black is-size-3 is-size-4-mobile">
        <i class="mdi mdi-arrow-right-bold-circle" /> Go Back to home page
      </nuxt-link>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    error: {
      type: Object,
      default() {
        return {};
      },
    },
  },

  data() {
    return {
      billboard: {
        height: "300px",
        image: "/img/practicearea.jpg",
        left: "Page Error",
        right: "",
      },
    };
  },

  created() {
    this.$store.dispatch("setBillboard", this.billboard);
  },
};
</script>