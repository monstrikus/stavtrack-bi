<template>
  <v-card class="elevation-12">
    <v-toolbar dark color="#F57F17">
      <v-toolbar-title>Регистрация</v-toolbar-title>
    </v-toolbar>
    <v-card-text>
      <v-form>
        <v-text-field v-model="name" label="Имя" type="text"></v-text-field>
        <v-text-field v-model="email" label="Email" type="text"></v-text-field>
        <v-text-field
          v-model="password"
          label="Пароль"
          type="password"
        ></v-text-field>
        <v-text-field
          v-model="password_confirmation"
          label="Повторите пароль"
          type="password"
          @keydown.enter="register"
        ></v-text-field>
      </v-form>
    </v-card-text>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn color="#F57F17" :dark="true" @click="register"
        >Зарегистрироваться</v-btn
      >
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: "Registration",
  data() {
    return { name: "", email: "", password: "", password_confirmation: "" };
  },
  methods: {
    register() {
      const data = {
        name: this.name,
        email: this.email,
        password: this.password,
        password_confirmation: this.password_confirmation,
      };
      this.$store
        .dispatch("registration", data)
        .then(() => this.$router.push("/app/dashboard"))
        .catch((err) => console.log(err));
    },
  },
};
</script>