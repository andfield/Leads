<template>
  <v-container fluid fill-height class="home-hero" style="max-height: 100vh;">
    <v-app-bar color="rgb(0,0,0,0)" dense dark app flat>
      


      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
    </v-app-bar> 
    <songs />
  </v-container>
</template>

<script>
import appNav from "./AppNav";
import songs from "./songs";
import SongsService from "../services/SongsService";
export default {
  components: {
    appNav,
    songs
  },
  data () {
    return {
      user: null,
      songs: null
    }
  },
  async mounted() {
    this.songs = (await SongsService.getByUser(this.user.id)).data;
  }
}
</script>

<style scoped>
.header {
  font-family: "Shadows Into Light", cursive;
}
</style>
