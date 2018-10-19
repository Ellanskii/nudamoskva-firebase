<template lang="pug">
.hero.is-bold.is-warning
    .hero-body
        .container
            .columns.is-centered
                .column.is-10-tablet.is-8-desktop.is-6-fullhd
                    h1.title Новая история
                    .box: b-field(label="Название")
                        b-input(v-model="title")
                    .box: b-field(label="Тело истории")
                        vue-editor(v-model="content")
                    .box
                        b-field(label="Картиночки")
                            b-upload(v-model="images" multiple drag-drop)
                                .section.has-text-centered.content
                                    p: b-icon(icon="upload" size="is-large")
                                    p Нажмите или перетащите файлы для загрузки
                        .tags
                            span(
                                v-for="(file, index) in images"
                                :key="index"
                                class="tag is-primary"
                                ) {{ file.name }}
                                button.delete.is-small(
                                    @click="deleteImage(index)"
                                    type="button"
                                )

                    .box
                        button.button.is-link(@click="upload(images[0])") Upload
                        button.button.is-link(@click="savePost") Save
</template>

<script>
import { storage } from "~/plugins/firebase/storage.js";
import { db } from "~/plugins/firebase/db.js";
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
      storyId: null,
      coords: '55.6332, 37.5198',
      title: "",
      content: "",
      images: []
    };
  },

  methods: {
    deleteImage(index) {
      this.images.splice(index, 1);
    },
    upload(file) {
      this.uploadTask = storage.ref("images/" + file.name).put(file);
    },
    savePost() {
      const docRef = this.storyId ? db().doc(`stories/${this.storyId}`) : db().collection(`stories`).doc()
      docRef.set(
          {
            title: this.title,
            content: this.content,
            geopoint: new db.GeoPoint(55.6332, 37.5198)
          },
          { merge: true }
        )
        .then(() => this.$router.push("/"))
        .catch(error => {
          console.error(`Error adding document: ${error}`);
        });
    }
  }
};
</script>

<style lang="scss">
.ql-editor p {
  margin: 0.5em 0;
}

.upload .upload-draggable {
  display: block;
}
</style>
