<template>
  <v-app id="app">
    <v-navigation-drawer
      app
      class="deep-purple accent-4"
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
          <v-btn block> Logout </v-btn>
        </div>
      </template>
    </v-navigation-drawer>

    <v-app-bar app color="orange" dense dark>
      <v-app-bar-nav-icon
        @click.stop="toggleDrawer = !toggleDrawer"
      ></v-app-bar-nav-icon>

      <v-toolbar-title class="headline">StavTrack BI</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <v-menu left bottom>
        <template v-slot:activator="{ on, attrs }">
          <v-btn icon v-bind="attrs" v-on="on">
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </template>

        <v-list>
          <v-list-item v-for="n in 5" :key="n" @click="() => {}">
            <v-list-item-title>Items {{ n }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>

    <!-- Sizes your content based upon application components -->
    <v-main>
      <!-- Provides the application the proper gutter -->
      <v-container fluid>
        <!-- If using vue-router -->
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
          //  { title: "Admin", icon: "mdi-gavel" },
        ],
      },
      toggleDrawer: true,
    };
  },
};
</script>
