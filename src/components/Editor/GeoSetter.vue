<template lang="pug">
b-field(grouped)
    b-field(label="Ширина" expanded)
        b-input
    b-field(label="Долгота" expanded)
        b-input
    b-field(style="padding-top:2rem;")
        button.button(type="button")
            b-icon(icon="delete")
    //- button.button(@click="showMap=!showMap" type="button" v-if="!showMap") Добавить
    //- story-map(v-if="showMap")
</template>

<script>
import StoryMap from "~/components/StoryMap";
export default {

}
</script>

<style>

</style>
