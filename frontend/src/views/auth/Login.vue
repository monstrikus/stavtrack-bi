<template>
  <div>
    <v-text-field v-model="form.username"></v-text-field>
    <v-text-field v-model="form.password"></v-text-field>
    <v-btn elevation="2">Войти</v-btn>
  </div>
</template>

<script>
export default {
name: "Login",
  data() {
    return {
      form: {
        username: 'имя',
        password: 'пароль'
      }
    }
  },
  methods: {
    sendForm() {
      console.log(this.form)
    }
  }
}
</script>

<style scoped>

</style>