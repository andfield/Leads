<template>
  <centerCard :title="song.title">
    <div slot="mainContent">
      <v-row dense>
        <v-col cols="12">
          <v-card :color="song.color" dark>
            <div class="d-flex flex-no-wrap justify-space-around">
              <v-avatar class="ma-3" size="125" tile>
                <v-img :src="song.albumImage"></v-img>
              </v-avatar>
              <div>
                <v-card-title class="headline" v-text="song.title"></v-card-title>

                <v-card-subtitle>
                  <p>
                    {{song.artist}}
                    <br />
                    {{song.album}}
                    <br />
                    {{song.genre}}
                  </p>
                </v-card-subtitle>
              </div>
            </div>
          </v-card>
        </v-col>
        <v-col cols="12">
          <v-card color="#385F73" dark>
            <v-card-title class="headline">Lyrics and Chords</v-card-title>

            <v-card-subtitle>Below are the lyrics with chords</v-card-subtitle>
            <v-card-content>
              <v-textarea readonly v-model="song.lyrics" class="mx-5" />
            </v-card-content>
          </v-card>
        </v-col>
        <v-col cols="12">
          <v-card color="green" dark>
            <v-card-title class="headline">Tabs and Chords</v-card-title>

            <v-card-subtitle>Below are the tabs with chords</v-card-subtitle>
            <v-card-content>
              <v-textarea readonly v-model="song.tabs" class="mx-5" />
            </v-card-content>
          </v-card>
        </v-col>
        <v-col cols="12">
          <youtube :video-id="id"></youtube>
        </v-col>
      </v-row>
    </div>
  </centerCard>
</template>

<script>
import SongService from '../services/SongsService'
import appNav from './AppNav'
import CenterCard from './CenterCardPanel'
// import { getIdFromURL } from 'vue-youtube-embed'
export default {
  components: {
    appNav,
    CenterCard
  },
  data () {
    return {
      song: {},
      id: ''
    }
  },

  async mounted () {
    var SongId = this.$store.state.route.params.SongId
    console.log(SongId)
    this.song = (await SongService.getById(SongId)).data
    var regExp = /^.*(youtu\.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/
    var match = this.song.youtubeId.match(regExp)
    if (match && match[2].length === 11) {
      this.id = match[2]
      console.log(match[2])
    }
  },
  methods: {
    youtube_parser () {}
  }
}
</script>

<style scoped>
</style>
