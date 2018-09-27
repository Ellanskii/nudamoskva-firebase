<template>
  <div id="app-wrapper">
    <app-header></app-header>
    <nav-bar></nav-bar>
    <div id="content-wrapper" class="mui--text-center">
      <nuxt class="mui-container"/>
    </div>
    <app-footer></app-footer>
  </div>
</template>

<script>
import AppFooter from "@/components/Footer";
import AppHeader from "@/components/Header";
import NavBar from "@/components/Navbar/Navbar";

export default {
  components: { AppHeader, AppFooter, NavBar },
  methods: {
    reloadPage() {
      window.location.reload();
    }
  }
};
</script>

<style>
#app-wrapper {
  display: flex;
  min-height: 100vh;
  flex-direction: column;
}
</style>
