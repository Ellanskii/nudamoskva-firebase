<template lang="pug">
.has-navbar-fixed-top
  nav-bar(isFixed)
  nuxt
</template>

<script>
import NavBar from "@/components/Navbar/Navbar";

export default {
  components: { NavBar },
};
</script>

<style lang="scss">
  .has-navbar-fixed-top {
    padding-top: 3.25rem;
  }
</style>
