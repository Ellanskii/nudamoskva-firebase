<template lang="pug">
    nav.navbar(:class="{ 'is-fixed-top': isFixed }")
        .container
            .navbar-brand
                nuxt-link(to="/") LOGO
            .navbar-menu
                .navbar-start(v-if="$nuxt.$route.name === 'index'")
                    .navbar-item
                        .button: b-icon(icon="map-marker")
                    .navbar-item
                        .button: b-icon(icon="format-list-bulleted")
                .navbar-end
                    .navbar-item
                        nuxt-link(to="auth")
                            | Вход

</template>
<script>
export default {
    props: {
        isFixed: Boolean
    }
}
</script>

<style lang="scss">

</style>

