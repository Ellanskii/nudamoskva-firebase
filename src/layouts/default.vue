<template lang="pug">
.has-navbar-fixed-top
  nav-bar(isFixed)
  nuxt
</template>

<script>
import AppHeader from "@/components/Header";
import NavBar from "@/components/Navbar/Navbar";

export default {
  components: { AppHeader, NavBar },
  methods: {
    reloadPage() {
      window.location.reload();
    }
  }
};
</script>

<style lang="scss">
  .has-navbar-fixed-top {
    padding-top: 3.5rem;
  }
</style>
