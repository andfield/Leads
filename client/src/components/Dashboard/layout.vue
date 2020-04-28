<template>
<v-container fluid fill-height class="home-hero" style="height: 100vh">
    <navBar />
</v-container>
</template>

<script>
import appNav from "../AppNav";
import navBar from "./navbar"
export default {
  components: {
    appNav,
    navBar
  },

  data() {
    return {
        user: this.$store.state.user,
        friends: null,
        feeds: null
    };
  }
};
</script>

<style scoped>
</style>