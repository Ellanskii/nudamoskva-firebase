<template lang="pug">
ul
    li.media(v-for="story in stories" :key="story.id")
        h3.title.is-5 {{ story.title }}

</template>

<script>
export default {
    props: {
        stories: Array
    }
}
</script>

<style>

</style>
