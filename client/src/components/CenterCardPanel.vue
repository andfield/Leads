<template>
  <v-container fluid fill-height class="home-hero" style="max-height: 100vh;">
    <appNav />
    <v-layout align-center justify-center>
      <v-flex xs11 sm10 md6 lg6 xl4>
        <v-card color="white" class="elevation-20">
          <v-toolbar dark color="black">
            <v-toolbar-title>{{ title }}</v-toolbar-title>
            <v-spacer />
            <slot name="button"></slot>
          </v-toolbar>
          <slot name="mainContent">Empty</slot>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import appNav from "./AppNav";
export default {
  components: {
    appNav
  },
  data() {
    return {
      //   title: "hello world"
    };
  },
  props: ["title"],
  methods: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
