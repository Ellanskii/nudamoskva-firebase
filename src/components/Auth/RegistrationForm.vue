<template lang="pug">
form
    b-field(custom-class="is-medium")
        b-input(
            type="email" 
            size="is-medium" 
            placeholder="E-mail" 
            v-model="email" 
            autocomplete="email" 
            name="email" 
            required
        )
    b-field(custom-class="is-medium")
        b-input(
            type="password" 
            size="is-medium" 
            placeholder="Пароль" 
            v-model="password" 
            autocomplete="new-password" 
            name="password" 
            required
        )
    button.button.is-primary.is-fullwidth.is-medium(
        @click="signUp()" 
        :disabled="!formReady" 
        type="button"
    ) Продолжить
</template>

<script>
import { auth } from "~/plugins/firebase.js";

export default {
  data: function() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    signUp() {
      auth.createUserWithEmailAndPassword(this.email, this.password).then(
        user => {},
        err => {
          this.$dialog.alert({
            title: "Не получилось войти",
            message: err.message,
            type: "is-danger",
            hasIcon: true,
            icon: "alert-circle-outline",
            canCancel: ['escape', 'outside']
          });
        }
      );
    }
  },
  computed: {
      formReady() {
          return (this.email && this.password) ? true : false 
      }
  }
};
</script>


