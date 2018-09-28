<template lang="pug">
    .hero.is-fullheight.is-bold.is-primary
        .hero-body
            .container
                .columns.is-centered
                    .column.is-6-tablet.is-4-desktop.is-3-fullhd
                        .box
                            h2.title.has-text-centered.has-text-grey Ну привет
                            login-form(v-if="currentForm === 'login'")
                            registration-form(v-else-if="currentForm === 'registration'")
                            restore-form(v-else-if="currentForm === 'restore'")
                            p.has-text-centered.has-text-weight-bold.auth-help
                                a.has-text-grey Вход
                                span.has-text-grey.dot  · 
                                a.has-text-grey Забыли пароль?


</template>

<script>
import LoginForm from "~/components/Auth/LoginForm";

export default {
  components: {
    LoginForm
  },
  data() {
    return {
      currentForm: "login"
    };
  }
};
</script>

<style lang="scss">
.dot {
  padding: 0 0.5em;
}
.auth-help {
  margin-top: 1rem;
  margin-bottom: 0.375rem;
}
</style>
