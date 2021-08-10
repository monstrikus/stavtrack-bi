<template>
  <v-app id="app">
    <v-navigation-drawer
      app
      class=" accent-4"
      dark
      v-model="toggleDrawer"
    >
      <v-list>
        <v-list-item v-for="item in drawer.items" :key="item.title" link :to="item.link">
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>

      <template v-slot:append>
        <div class="pa-2">
          <v-btn block> Выйти </v-btn>
        </div>
      </template>
    </v-navigation-drawer>

    <v-app-bar app color="#F57F17" dense dark>
      <v-app-bar-nav-icon
        @click.stop="toggleDrawer = !toggleDrawer"
      ></v-app-bar-nav-icon>

      <v-toolbar-title class="headline">StavTrack BI</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>


    </v-app-bar>

    <v-main>
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",

  components: {},

  data() {
    return {
      drawer: {
        items: [
          { title: "Главная", icon: "mdi-view-dashboard", link: "/" },
          { title: "Графики", icon: "mdi-account-box", link: "/graphs" },
          { title: "Логин", icon: "mdi-account-box", link: "/login" },
        ],
      },
      toggleDrawer: true,
    };
  },
};
</script>
