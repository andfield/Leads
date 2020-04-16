<template>
  <v-container fluid fill-height class="home-hero" style="max-height: 100vh;">
    <AppNav/>
    <div class="banner">
      <h1>Tabs Checker</h1>
      <h2>Connect with your music not appereance</h2>
      <v-btn to="register" outlined rounded large color="white" class="btn ma-5">
        <v-icon left large>mdi-guitar-acoustic</v-icon>Connect now
      </v-btn>
    </div>
  </v-container>
</template>

<script>
import AppNav from "./AppNav";
export default {
  components: {
    AppNav
  }
};
</script>

<style scoped>
.banner {
  text-align: center;
  position: absolute;
  height: auto;
  color: whitesmoke;
  width: 100%;
  margin-top: 10px;
}
h1 {
  font-size: 8em;
  word-wrap: normal;
  font-family: "Shadows Into Light", cursive;
}
h2 {
  font-size: 2em;
  margin-top: -17px;
  text-align: center;
  font-weight: 400;
  font-family: "Source Sans Pro", sans-serif;
}

@media only screen and (max-width: 750px) {
  .banner {
    margin-top: 2px;
  }
  h1 {
    font-size: 5em;
  }
  h2 {
    font-size: 2em;
  }
}
</style>