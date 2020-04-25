<template>
  <span>
    <v-navigation-drawer color="rgb(0,0,0,0)" app v-model="drawer" temporary absolute>
      <v-list dark nav>
        <v-list-item to="songs">
          <v-list-item-icon>
            <v-icon large>mdi-file-find</v-icon>
          </v-list-item-icon>
          <v-list-item-content>Browse</v-list-item-content>
        </v-list-item>
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
        <v-list-item v-if="!$store.state.isUserLoggedIn" to="login">
          <v-list-item-icon>
            <v-icon large>mdi-account</v-icon>
          </v-list-item-icon>
          <v-list-item-content>Account</v-list-item-content>
        </v-list-item>
        <v-list-item v-if="$store.state.isUserLoggedIn" @click="logout">
          <v-list-item-icon>
            <v-icon large>mdi-account</v-icon>
          </v-list-item-icon>
          <v-list-item-content>logout</v-list-item-content>
        </v-list-item>
      </v-list>
      <v-divider color="white" />
    </v-navigation-drawer>
    <v-app-bar app dark flat color="rgb(0, 0, 0, 0)" class="bar" absolute>
      <router-link to="/">
        <v-toolbar-title class="hidden-sm-and-down header">Tabs Checker</v-toolbar-title>
      </router-link>
      <v-spacer />
      <v-btn
        to="/songs"
        outlined
        x-large
        color="white"
        class="button ma-5 mt-10 hidden-sm-and-down"
      >
        <v-icon left>mdi-file-find</v-icon>Browse
      </v-btn>
      <v-btn
        to="login"
        v-if="!$store.state.isUserLoggedIn"
        outlined
        x-large
        color="white"
        class="button ma-5 mt-10 hidden-sm-and-down"
      >
        <v-icon left>mdi-account</v-icon>Login
      </v-btn>
      <v-btn
        to="register"
        v-if="!$store.state.isUserLoggedIn"
        depressed
        x-large
        color="#F3E367"
        class="button ma-5 mt-10 hidden-sm-and-down black--text"
      >
        <v-icon left>mdi-guitar-acoustic</v-icon>Sign up
      </v-btn>
      <v-btn
        @click="logout"
        v-if="$store.state.isUserLoggedIn"
        outlined
        x-large
        color="white"
        class="button ma-5 mt-10 hidden-sm-and-down"
      >
        <v-icon left>mdi-cancel</v-icon>Logout
      </v-btn>
      <v-app-bar-nav-icon large color="#F3E367" class="hidden-md-and-up" @click="drawer = !drawer"></v-app-bar-nav-icon>
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

  methods: {
    logout() {
      this.$store.dispatch("setToken", null);
      this.$store.dispatch("setUser", null);
      this.$router.push({
        name: "HelloWorld"
      });
    }
  }
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

a {
  text-decoration: none;
  color: white;
}
</style>