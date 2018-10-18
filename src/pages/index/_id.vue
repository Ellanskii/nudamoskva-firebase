<template lang="pug">

    .modal-card
        .modal-card-head
            
        .modal-card-body
            article.content(v-html="story.content")
        .modal-card-foot
            random-button(@click.native="$parent.close()")
</template>

<script>
import RandomButton from "~/components/RandomButton";
import { db } from "~/plugins/firebase/db.js";

export default {
  components: {
    RandomButton
  },


  async asyncData(context) {
    const openedDirectly = true;
    const id = context.route.params.id;
    let story = {};
    const storyRef = await db
      .doc(`stories/${id}`)
      .get()
      .then(function(doc) {
        if (doc.exists) {
          story = doc.data();
        } else {
          // doc.data() will be undefined in this case
          story.content = `<h1 class="title is-1">404</h1>`
        }
      })
      .catch(function(error) {
        console.log("Error getting document:", error);
      });
    return { story, openedDirectly };
  }
};
</script>

<style>
</style>
