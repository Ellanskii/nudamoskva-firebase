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
                        geo-setter
                    .box
                        button.button.is-link(@click="upload(images[0])") Upload
                        button.button.is-link(@click="savePost") Save
</template>

<script>
import { storage } from "~/plugins/firebase/storage.js";
import { db } from "~/plugins/firebase/db.js";
import VueEditor from "~/components/Editor/VueEditor.vue";
import GeoSetter from "~/components/Editor/GeoSetter.vue";

export default {
  components: {
    VueEditor,
    GeoSetter
  },

  data() {
    return {
      storyId: null,
      coords: "55.6332, 37.5198",
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
      const docRef = this.storyId
        ? db().doc(`stories/${this.storyId}`)
        : db()
            .collection(`stories`)
            .doc();
      docRef
        .set(
          {
            title: this.title,
            content: this.content,
            // geopoint: new db.GeoPoint(55.6332, 37.5198)
          },
          { merge: true }
        )
        // .then(doc => this.$router.push(`/${doc.id}`))
        .then(doc => console.log(doc))
        .catch(error => {
          this.$dialog.alert({
            title: "Ошибка при добавлении документа",
            message: error.message,
            type: "is-danger",
            hasIcon: true,
            icon: "alert-circle-outline",
            canCancel: ["escape", "outside"]
          });
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
