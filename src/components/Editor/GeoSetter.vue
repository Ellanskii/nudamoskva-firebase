<template lang="pug">
b-field(grouped)
    b-field(label="Широта" expanded)
        b-input
    b-field(label="Долгота" expanded)
        b-input
    b-field(style="padding-top:2rem;")
        button.button(type="button")
            b-icon(icon="delete")
    button.button(@click="showMap=!showMap" type="button") Добавить
    b-modal(:active.sync="showMap")
        story-map(v-if="showMap" isEditor="true")
</template>

<script>
import StoryMap from "~/components/StoryMap";
export default {
    components: {
        StoryMap
    },

    data() {
        return {
            showMap: false
        }
    }
}
</script>

<style>

</style>
