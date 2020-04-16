<template>
  <span>
    <v-navigation-drawer color="rgb(0,0,0,0)" app v-model="drawer" temporary absolute>
      <v-list dark nav>
        <v-list-item v-if="!$store.state.isUserLoggedIn" to="register">
          <v-list-item-icon>
            <v-icon large>mdi-account</v-icon>
          </v-list-item-icon>
          <v-list-item-content>Sign up</v-list-item-content>
        </v-list-item>
        <v-list-item v-if="!$store.state.isUserLoggedIn" to="login">
          <v-list-item-icon>
            <v-icon large>mdi-account</v-icon>
          </v-list-item-icon>
          <v-list-item-content>login</v-list-item-content>
        </v-list-item>
      </v-list>
      <v-divider color="white" />
    </v-navigation-drawer>
    <v-app-bar app dark flat color="rgb(0, 0, 0, 0)" class="bar">
      <v-toolbar-title to="/" class="hidden-sm-and-down header">Tabs Checker</v-toolbar-title>
      <v-spacer />
      <v-btn
        to="login"
        v-if="!$store.state.isUserLoggedIn"
        outlined
        rounded
        x-large
        color="white"
        class="button ma-5 hidden-sm-and-down"
      >
        <v-icon left>mdi-account</v-icon>Login
      </v-btn>
      <v-app-bar-nav-icon large class="hidden-md-and-up" @click="drawer = !drawer"></v-app-bar-nav-icon>
    </v-app-bar>
  </span>
</template>

<script>
export default {
  data() {
    return {
      drawer: false
    };
  },

  methods: {}
};
</script>

<style scoped>
.header {
  font-size: 3em;
  font-family: "Shadows Into Light", cursive;
}
.button {
  font-weight: bold;
  font-family: "Shadows Into Light", cursive;
}
</style>