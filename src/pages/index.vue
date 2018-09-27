<template>
  <section class="container">
    <div>
      <logo/>
      <h1 class="mui--text-display1">Nuxt.js Firebase Functions</h1>
      <h2 class="headline">Rendered From:<span class="render-result">{{renderSource}}</span></h2>
      <button
        id="reload-btn"
        class="mui-btn mui-btn--primary"
        @click="reloadPage">
        Reload Page
      </button>
    </div>
  </section>
</template>

<script>
import { db } from "~/plugins/firebase.js";
import Logo from "~/components/Logo.vue";

export default {
  async asyncData() {
    const renderSource = process.static
      ? "static"
      : process.server ? "server" : "client";
    const stories = [];
    const storiesRef = await db
      .collection("stories")
      .get()
      .then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
          stories.push({ id: doc.id, data: doc.data() });
        });
      });

    return { stories, renderSource };
  },
  components: {
    Logo
  },
  methods: {
    reloadPage() {
      window.location.reload();
    }
  }
};
</script>
