<template lang="pug">
.hero.is-fullheight
  .hero-body
    ul
      li(v-for="story in stories" :key="story.id" @click="openStory(story)")
        h1 {{ story.data.title }}
    b-modal(:active.sync="isModalActive" has-modal-card)
      story-modal(:story="currentStory")
</template>

<script>
import { db } from "~/plugins/firebase.js";
import StoryModal from "~/components/StoryModal.vue";

export default {
  components: {
    StoryModal
  },

  async asyncData() {
    const stories = [];
    const storiesRef = await db
      .collection("stories")
      .get()
      .then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
          stories.push({ id: doc.id, data: doc.data() });
        });
      });
    return { stories };
  },

  data() {
    return {
      isModalActive: false,
      currentStory: null
    };
  },

  methods: {
    openStory(story) {
      this.currentStory = story;
      this.isModalActive = true;
    }
  },

  mounted() {
    console.log($nuxt.$route.path, $nuxt.$route.name);
    window.$cookies.set("test", "Hello world!", 1);
    console.log(window.$cookies.get("test"));
  }
};
</script>


