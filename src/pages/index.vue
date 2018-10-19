<template lang="pug">
.stories-container
  .columns.is-fullheight
    //- stories-list
    ul.column.is-3
      li.media(v-for="story in stories" :key="story.id")
        .media-content  
          nuxt-link(:to="'/'+story.id" @click.native="isModalActive = true") {{ story.data.title }}
        .media-right
          b-icon(icon="eye")
    .column.is-9(style="position: relative")
      story-map(
        v-if="showMap"
        :stories="storiesWithGeopoint" 
        @markerClicked="isModalActive = true"
        )
      //- yandex-map
    b-modal(:active.sync="isModalActive" has-modal-card)
      nuxt-child(:key="$route.params.id")
</template>

<script>
import { db } from "~/plugins/firebase/db.js";
import StoryModal from "~/components/StoryModal";
import StoriesList from "~/components/StoriesList";
import StoryMap from "~/components/StoryMap";

export default {
  components: {
    StoryModal,
    StoriesList,
    StoryMap
  },

  async asyncData(context) {
    const isModalActive = context.route.params.id ? true : false;
    const stories = [];
    const storiesRef = await db()
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
      showMap: false
    };
  },

  computed: {
    storiesWithGeopoint() {
      return this.stories.filter(story => {
        return story.data.geopoint;
      });
    }
  },

  mounted() {
    this.showMap = window.innerWidth > 768 ? true : false;
  }
};
</script>

<style lang="scss">
.stories-container {
  padding: 0 0.75rem;
  height: calc(100vh - 3.25rem);
  .columns.is-fullheight {
    height: 100%;
    .column {
      height: 100%;
    }
  }
}
</style>



