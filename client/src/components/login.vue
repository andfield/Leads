<template>
  <v-container fluid fill-height class="home-hero" style="max-height: 100vh;">
    <v-layout align-center justify-center>
      <v-flex xs11 sm10 md6 lg6 xl4>
        <v-card color="rgb(69, 0, 0, 0.2)" class="elevation-19">
          <v-toolbar dark color="#594217">
            <v-toolbar-title>Login</v-toolbar-title>
          </v-toolbar>
          <v-card-text>
            <v-text-field dark color="white" label="Email" v-model="email" outlined />
            <v-text-field dark color="white" label="Pasword" v-model="password" outlined />
          </v-card-text>
          <v-card-actions>
            <v-spacer />
            <v-btn to="/" dark color="#594217" class="mb-4" x-large>back</v-btn>
            <v-spacer />
            <v-btn @click="login()" dark x-large color="#594217" class="mb-4">Enter the cult</v-btn>
            <v-spacer />
          </v-card-actions>
          <v-alert type="error" outlined v-model="alert" v-text="error" />
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import authenticationService from "../services/authenticationService.js";
import appNav from "./AppNav";
export default {
  components: {
    appNav
  },
  data() {
    return {
      email: "",
      password: "",
      error: null,
      alert: false
    };
  },
  methods: {
    async login() {
      try {
        const response = await authenticationService.login({
          email: this.email,
          password: this.password
        });
        this.$store.dispatch("setToken", response.data.token);
        this.$store.dispatch("setUser", response.data.user);
      } catch (error) {
        this.error = error.response.data.error;
        this.alert = true;
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
