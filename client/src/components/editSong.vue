<template>
  <centerCard :title="title">
    <div slot="mainContent">
      <v-stepper v-model="stepper" class="step">
        <v-stepper-header>
          <v-stepper-step :complete="stepper > 1" editable step="1" color="black">Song Details</v-stepper-step>

          <v-divider></v-divider>

          <v-stepper-step :complete="stepper > 2" step="2" color="black">Artist Details</v-stepper-step>

          <v-divider></v-divider>

          <v-stepper-step step="3" editable color="black">Tutorials</v-stepper-step>
        </v-stepper-header>
        <!-- step 1 -->
        <v-stepper-item>
          <v-stepper-content step="1">
            <v-text-field color="black" class="ma-5" label="name" v-model="song.title" outlined />
            <v-text-field color="black" class="ma-5" label="genre" v-model="song.genre" outlined />

            <v-btn
              outlined
              rounded
              large
              color="#c9020f"
              class="button ma-5"
              @click="backtoSongs"
            >Cancel</v-btn>

            <v-btn
              @click="stepper = 2"
              outlined
              rounded
              large
              color="success"
              class="button ma-5"
            >Continue</v-btn>
          </v-stepper-content>
        </v-stepper-item>
        <!-- step 2 -->
        <v-stepper-item>
          <v-stepper-content step="2">
            <v-text-field
              color="black"
              class="ma-5"
              label="Artist Name"
              v-model="song.artist"
              outlined
            />
            <v-text-field
              color="black"
              class="ma-5"
              label="Album name"
              v-model="song.album"
              outlined
            />
            <v-container>
              <v-row dense>
                <v-col cols="6">
                  <v-text-field
                    color="black"
                    class="ma-2"
                    label="Album Art"
                    v-model="song.albumImage"
                    outlined
                  />
                </v-col>
                <v-col cols="6">
                  <v-expansion-panels flat>
                    <v-expansion-panel>
                      <v-expansion-panel-header>Color Picker</v-expansion-panel-header>
                      <v-expansion-panel-content>
                        <v-color-picker
                          class="ma-2"
                          v-model="song.color"
                          hide-canvas
                          hide-inputs
                          mode="hexa"
                        ></v-color-picker>
                        {{song.color}}
                      </v-expansion-panel-content>
                    </v-expansion-panel>
                  </v-expansion-panels>
                </v-col>
              </v-row>
            </v-container>

            <v-btn
              outlined
              rounded
              large
              color="#c9020f"
              class="button ma-5"
              @click="stepper = 1"
            >Cancel</v-btn>
            <v-btn
              @click="stepper = 3"
              outlined
              rounded
              large
              color="sucess"
              class="button ma-5"
            >Continue</v-btn>
          </v-stepper-content>
        </v-stepper-item>

        <!-- step 3 -->
        <v-stepper-item>
          <v-stepper-content step="3">
            <v-textarea v-model="song.tabs" filled color="black" label="Tabs" rows="3" />

            <v-textarea v-model="song.lyrics" filled color="black" label="Lyrics" rows="3" />

            <v-text-field
              color="black"
              class="ma-5"
              label="Youtube Video"
              v-model="song.youtubeId"
              outlined
            />

            <v-btn
              outlined
              rounded
              large
              color="#c9020f"
              class="button ma-5"
              @click="stepper = 2"
            >Cancel</v-btn>

            <v-btn
              @click="editSong()"
              outlined
              rounded
              large
              color="sucess"
              class="button ma-5"
            >Finish</v-btn>
          </v-stepper-content>
        </v-stepper-item>
      </v-stepper>
    </div>
  </centerCard>
</template>


<script>
import centerCard from "./CenterCardPanel";
import SongsService from "../services/SongsService";
export default {
  components: {
    centerCard
  },
  data() {
    return {
      title: "",
      error: null,
      stepper: 1,
      snackbar: false,
      song: {}
    };
  },
  async mounted() {
    var songId = this.$store.state.route.params.SongId;
    this.song = (await SongsService.getById(songId)).data;
    this.title = "Editing: " + this.song.title;
  },

  methods: {
    backtoSongs() {
      this.$router.push({
        name: "songs"
      });
    },

    async editSong() {
      //Editing the song on backend
      var songId = this.$store.state.route.params.SongId;
      try {
        var response = await SongsService.editSong(this.song);
        this.$router.push({
          name: "song",
          params: {
            SongId: songId
          }
        })
      } catch (error) {
        this.error = error.response.data.error;
        console.log(this.error);
      }
      console.log(response.data);
    }
  }
};
</script>
<style scoped>
.step {
  background-color: rgba(65, 0, 0, 0);
}
.button {
  font-weight: bold;
  font-family: "Shadows Into Light", cursive;
}
</style>