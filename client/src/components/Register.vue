<template>
  <centerCard title="Guild joining form">
    <div slot="mainContent">
      <v-card-text>
        <v-text-field color="black" label="Email" v-model="email" outlined />
        <v-text-field color="black" label="Pasword" v-model="password" outlined />
      </v-card-text>
      <v-card-actions>
        <v-spacer />
        <v-btn to="/" dark color="grey" class="mb-4" x-large>back</v-btn>
        <v-spacer />
        <v-btn @click="register" dark x-large color="#F3E367" class="mb-4 black--text">Join the cult</v-btn>
        <v-spacer />
      </v-card-actions>
      <v-alert type="error" outlined v-model="alert" v-text="error" />
    </div>
  </centerCard>
</template>

<script>
import authenticationService from "../services/authenticationService.js";
import centerCard from "./CenterCardPanel";
export default {
  components: {
    centerCard
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
    async register() {
      try {
        var response = await authenticationService.register({
          email: this.email,
          password: this.password
        });
        this.$store.dispatch("setToken", response.data.token);
        this.$store.dispatch("setUser", response.data.user);
      } catch (error) {
        this.error = error.response.data.error;
        this.alert = true;
      }
      // try {
      //   const response = authenticationService.register({
      //     email: this.email,
      //     password: this.password
      //   });
      // } catch (error) {
      //   this.error = error.response.data.error;
      //   this.alert = true;
      // }
      console.log(response.data.token);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
