<template lang="pug">
.hero 
    .hero-body
        .container
            .box
                vue-editor(v-model="content")
</template>

<script>
import VueEditor from '~/components/VueEditor.vue'
export default {
    components: {
        VueEditor
    },
    data() {
        return {
            content: ''
        }
    }
}
</script>

<style>

</style>
