<template>
  <div class="app">
    <section class="hero is-fullheight bg-img">
      <div class="hero-body">
        <div class="container">
          <nuxt />
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.bg-img {
  background-image: linear-gradient(rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.75)),
    url("/img/bk.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-color: none;
  position: relative;
  max-height: 100%;
}

* {
  margin: 0;
  padding: 0;
}
.container {
  display: flex;
  justify-content: center;
  margin-left: 4.5em;
}
@media screen and (max-width: 420px) {
  .container {
    margin-left: 0 !important;
  }
}
</style>