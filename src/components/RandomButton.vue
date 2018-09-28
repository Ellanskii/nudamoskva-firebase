<template lang="pug">
    button.button {{ text }}
</template>

<script>
export default {
  data() {
    return {
      variants: [
        "Ну такое",
        "Бывает же",
        "Ну ок",
        "Ничего себе",
        "Вау",
        "Ого",
        "Ништяк",
        "Сойдёт",
        "Нормас"
      ],
      text: ""
    };
  },
  created() {
    this.text = this.variants[Math.floor(Math.random() * this.variants.length)];
  }
};
</script>

