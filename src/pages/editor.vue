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
                        button.button(@click="upload(images[0])") Upload
</template>

<script>
import { storage } from "~/plugins/firebase.js";
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
