<template lang="pug">
.has-navbar-fixed-top
  nav-bar(isFixed)
  nuxt
  footer-component
</template>

<script>
import NavBar from "@/components/Navbar/Navbar";
import FooterComponent from "@/components/FooterComponent";

export default {
  components: { NavBar, FooterComponent },
};
</script>

<style lang="scss">
  .has-navbar-fixed-top {
    padding-top: 3.25rem;
  }
</style>
