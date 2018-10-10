<template lang="pug">
.hero.is-fullheight
  .hero-body
    stories-list
    ul.column.is-3
      li.media(v-for="story in stories" :key="story.id")
        .media-content  
          nuxt-link(:to="'/'+story.id" @click.native="isModalActive = true") {{ story.data.title }}
        .media-right
          b-icon(icon="eye")
    b-modal(:active.sync="isModalActive" has-modal-card)
      nuxt-child(:key="$route.params.id")
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

  async asyncData(context) {
    const isModalActive = context.route.params.id ? true : false
    const stories = [];
    const storiesRef = await db
      .collection("storiesList")
      .get()
      .then(function(querySnapshot) {
        querySnapshot.forEach(doc => {
          stories.push({ id: doc.id, data: doc.data() });
        });
      });
    return { stories, isModalActive };
  },

  data() {
    return {
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


