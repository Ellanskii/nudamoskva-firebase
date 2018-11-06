<template lang="pug">
yandex-map(
  v-if="isEditor"
  :coords="coords"
  style="position: absolute; width: 100%; height: 500px;"
)
yandex-map(
    v-else
    :coords="coords"
    zoom="10"
    :controls="[]"
    :behaviors="[]"
    style="position: absolute; width: 100%; height: 100%;"
    )
    ymap-marker(
        v-for="story in stories"
        :key="story.id"
        markerId="story.id"
        marker-type="circle"
        circle-radius="160"
        :marker-fill="{color: '#000000', opacity: 0.4}"
        :marker-stroke="{color: '#ff0000', width: 5}"
        :coords="story.data.geopoint | geopointToCoords"
        :callbacks="callbacks(story.id)"
        )
</template>

<script>
import { yandexMap, ymapMarker } from "vue-yandex-maps";
export default {
  components: { yandexMap, ymapMarker },
  props: {
    stories: Array,
    isEditor: {
      type: Boolean,
      default: false
    }
  },

  data() {
    return {
      coords: [55.7522, 37.6203]
    };
  },

  computed: {

  },

  methods: {
    callbacks(id) {
      return { click: () => this.markerClick(id) };
    },
    markerClick(id) {
      this.$router.push(id);
      this.$emit("markerClicked");
    }
  },

  filters: {
    geopointToCoords: function(geopoint) {
      return [geopoint._lat, geopoint._long];
    }
  }
};
</script>

<style>
</style>
