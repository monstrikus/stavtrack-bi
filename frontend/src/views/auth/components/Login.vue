<template>
  <v-card class="elevation-12">
    <v-toolbar dark color="#F57F17">
      <v-toolbar-title>Авторизация</v-toolbar-title>
    </v-toolbar>
    <v-card-text>
      <v-form>
        <v-text-field v-model="email" label="Email" type="text"></v-text-field>
        <v-text-field
          v-model="password"
          label="Пароль"
          type="password"
          @keypress.enter="login"
        ></v-text-field>
      </v-form>
    </v-card-text>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn color="#F57F17" :dark="true" @click="login">Войти</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: "Login",
  data() {
    return { email: "", password: "" };
  },
  methods: {
    login() {
      this.$store
        .dispatch("login", { email: this.email, password: this.password })
        .then(() => this.$router.push("/app/dashboard"))
        .catch((err) => console.log(err));
    },
  },
};
</script>