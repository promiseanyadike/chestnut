<template>
  <div class="sidebar">
    <div class="main-menu" :class="displaySideBar">
      <ul>
        <li>
          <nuxt-link to="/dashboard">
            <i class="mdi mdi-view-dashboard" />
            Dashboard
          </nuxt-link>
        </li>
        <li>
          <nuxt-link to="/pages">
            <i class="mdi mdi-speaker" />
            Pages
          </nuxt-link>
        </li>
        <li>
          <nuxt-link to="/services">
            <i class="mdi mdi-home" />
            Services
          </nuxt-link>
        </li>
        <li>
          <nuxt-link to="/gallery">
            <i class="mdi mdi-home" />
            Gallery
          </nuxt-link>
        </li>
        <li>
          <nuxt-link to="/about">
            <i class="mdi mdi-newspaper" />
            About
          </nuxt-link>
        </li>
        <li>
          <nuxt-link to="/contact">
            <i class="mdi mdi-monitor" />
            Contacts
          </nuxt-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    displaySideBar: {
      type: String,
      default: "",
    },
  },
};
</script>

<style>
</style>
