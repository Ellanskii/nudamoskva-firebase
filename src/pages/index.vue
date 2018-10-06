<template lang="pug">
.hero.is-fullheight
  .hero-body
    stories-list
    ul
      //- li(v-for="story in stories" :key="story.id" @click="openStory(story)")
        h1 {{ story.data.title }}
      li(v-for="story in stories" :key="story.id")
        nuxt-link(:to="'/'+story.data.title" @click.native="currentStory=story") {{ story.data.title }}
    b-modal(:active.sync="isModalActive" has-modal-card)
      story-modal(:story="currentStory")
    nuxt-child(:key="$route.params.id" :story="currentStory")
</template>

<script>
import { db } from "~/plugins/firebase/db.js";
import StoryModal from "~/components/StoryModal";
import StoriesList from "~/components/StoriesList";

export default {
  components: {
    StoryModal,
    StoriesList
  },

  async asyncData() {
    const stories = [];
    const storiesRef = await db
      .collection("stories")
      .get()
      .then(function(querySnapshot) {
        querySnapshot.forEach(doc => {
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

  }
};
</script>


