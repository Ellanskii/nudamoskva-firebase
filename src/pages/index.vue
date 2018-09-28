<template lang="pug">
ul
  li(v-for="story in stories" :key="story.id")
    h1 {{ story.data.title }}
    .content(v-html="story.data.content")
    story-modal
</template>

<script>
import { db } from "~/plugins/firebase.js";
import StoryModal from "~/components/StoryModal.vue";

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
    StoryModal
  },
  mounted() {
    console.log($nuxt.$route.path, $nuxt.$route.name)
    window.$cookies.set('test', 'Hello world!', 1);
    console.log(window.$cookies.get('test'))
  }
};
</script>
