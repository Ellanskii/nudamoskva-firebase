<template lang="pug">
  #app-wrapper
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

<style>

</style>
