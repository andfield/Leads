<template>
  <v-container fluid fill-height class="home-hero" style="max-height: 100vh;">
    <v-layout align-center justify-center>
      <v-flex xs11 sm10 md6 lg6 xl4>
        <v-card color="rgb(, 0, 0, 0.2)" class="elevation-12">
          <v-toolbar dark color="#594217">
            <v-toolbar-title>Register</v-toolbar-title>
          </v-toolbar>
          <v-card-text>
            <v-text-field label="Email" v-model="email" outlined />
            <v-text-field label="Pasword" v-model="password" outlined />
          </v-card-text>
          <v-card-actions>
            <v-spacer />
            <v-btn @click="register()" dark x-large color="#594217" class="mb-4">Join the cult</v-btn>
            <v-spacer />
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import authenticationService from "../services/authenticationService.js";
export default {
  data() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    async register() {
      const response = await authenticationService.register({
        email: this.email,
        password: this.password
      });
      console.log(response.data);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.home-hero {
  background: url("../assets/img.jpg");
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
  width: 100%;
  height: 100%;
  overflow: visible;
}
</style>
