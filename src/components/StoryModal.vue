<template lang="pug">
.modal-card
    .modal-card-head
    .modal-card-body
        article.content(v-html="story.data.content")
    .modal-card-foot
        random-button
</template>

<script>
import RandomButton from "~/components/RandomButton";
export default {
    components: {
        RandomButton
    },

    props: {
        story: Object
    }

}
</script>

<style>

</style>
