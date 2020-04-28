<template>
  <centerCard title="Songs">
    <div slot="button">
      <v-btn light depressed small absolute bottom right color="#F3E367" fab to="songs/create">
        <v-icon>mdi-plus</v-icon>
      </v-btn>
    </div>
    <v-container slot="mainContent" class="mt-2">
      <v-row dense>
        <v-col cols="12">
          <v-card color="#385F73" dark>
            <v-card-title class="headline">Unlimited music now</v-card-title>

            <v-card-subtitle>Listen to your favorite artists and albums whenever and wherever, online and offline.</v-card-subtitle>

            <v-card-actions>
              <v-btn rounded outlined color="#FF69B4">Listen Now</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
        <v-col cols="12" v-for="song in songs" :key="song.id">
          <v-hover>
            <template v-slot:default="{ hover }">
              <v-card :color="song.color" dark>
                <div class="d-flex flex-no-wrap justify-space-between">
                  <div>
                    <v-card-title class="headline" v-text="song.title" />

                    <v-card-subtitle class="mt-2">
                      <ul>
                        <li>{{song.artist}}</li>
                        <li>{{song.album}}</li>
                        <li>{{song.genre}}</li>
                      </ul>
                    </v-card-subtitle>
                  </div>

                  <v-avatar class="ma-3" size="125" tile>
                    <v-img :src="song.albumImage"></v-img>
                  </v-avatar>
                </div>
                <v-fade-transition>
                  <v-overlay v-if="hover" absolute color="#036358">
                    <v-btn @click="details(song.id)">See Details</v-btn>
                    <v-btn @click="editSong(song.id)">Edit</v-btn>
                  </v-overlay>
                </v-fade-transition>
              </v-card>
            </template>
          </v-hover>
        </v-col>
      </v-row>
    </v-container>
  </centerCard>
</template>

<script>
import centerCard from './CenterCardPanel'
import SongsService from '../services/SongsService'
export default {
  components: {
    centerCard
  },
  data () {
    return {
      songs: null,
      overlay: false,
      user: this.$store.state.user
    }
  },
  async mounted () {
    // request backend for all the songs
    this.songs = (await SongsService.getAllSongs()).data
  },
  methods: {
    details (id) {
      console.log(id)
      this.$router.push({
        name: 'song',
        params: {
          SongId: id
        }
      })
    },
    editSong (id) {
      console.log(id)
      if (this.user.email) {
        this.$router.push({
          name: 'editSong',
          params: {
            SongId: id
          }
        })
      }
    }
  }
}
</script>
