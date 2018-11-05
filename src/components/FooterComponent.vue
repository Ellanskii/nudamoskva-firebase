
<template lang="pug">
    footer.footer#footer
        .container.is-fluid
            //- a(href="https://github.com/Ellanskii", target="_blank", rel="nofollow")
            //-     |©&nbsp;
            //-     b-icon(icon="github-circle" size="is-small")
            //-     | Ellanskii, {{ copyrightYear }}
</template>

<script>
export default {
    data() {
        return {
        }
    },
    computed: {
        copyrightYear: function () {
            let mdate = new Date();
            return mdate.getFullYear()
        }
    },
}
</script>

<style>
</style>