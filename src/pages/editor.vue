<template lang="pug">
.hero 
    .hero-body
        .container
            .box
                vue-editor(v-model="content")
            .box {{content}}
</template>

<script>
import VueEditor from "~/components/VueEditor.vue";
export default {
  components: {
    VueEditor
  },

  head: {
    script: [
      {
        src: "https://cdn.quilljs.com/1.3.6/quill.min.js"
      }
    ]
  },

  data() {
    return {
      content: ""
    };
  }
};
</script>

<style>
.ql-editor p {
    margin: .5em 0;
}
</style>
