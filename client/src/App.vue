<template>
  <v-app>
    <router-view />
  </v-app>
</template>

<script>
import HelloWorld from "./components/HelloWorld";

export default {
  name: "App",

  components: {
    HelloWorld
  },

  data: () => ({
    //
  })
};
</script>

<style >
.home-hero {
  background: url("./assets/img.jpg");
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
  width: 100%;
  height: 100%;
  overflow: visible;
  position: relative;
}

@media only screen and (max-width: 750px) {
  /* styles for wide screens */
  .home-hero {
    background: url("./assets/mobile.jpg");
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
    width: 100%;
    height: 100%;
    overflow: visible;
    position: relative;
  }
}
</style>

