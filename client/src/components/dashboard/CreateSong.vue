<template>
	<centerCard title="Create a Song">
		<div slot="mainContent">
			<v-stepper v-model="stepper" class="step">
				<v-stepper-header>
					<v-stepper-step
						:complete="stepper > 1"
						editable
						step="1"
						color="black"
						>Song Details</v-stepper-step
					>

					<v-divider></v-divider>

					<v-stepper-step :complete="stepper > 2" step="2" color="black"
						>Artist Details</v-stepper-step
					>

					<v-divider></v-divider>

					<v-stepper-step step="3" editable color="black"
						>Tutorials</v-stepper-step
					>
				</v-stepper-header>
				<!-- step 1 -->
				<v-stepper-item>
					<v-stepper-content step="1">
						<v-text-field
							color="black"
							class="ma-5"
							label="Song Name"
							v-model="title"
							outlined
							:rules="[rules.required]"
						/>
						<v-select
							color="black"
							class="ma-5"
							v-model="genre"
							:items="genres"
							:rules="[rules.required]"
							label="Select Genre"
							required
						></v-select>

						<!-- <v-text-field
							color="black"
							class="ma-5"
							label="genre"
							v-model="genre"
							outlined
							:rules="[rules.required]"
						/> -->

						<v-btn
							outlined
							rounded
							large
							color="#c9020f"
							class="button ma-5"
							@click="backtoSongs"
							>Cancel</v-btn
						>

						<v-btn
							@click="stepper = 2"
							outlined
							rounded
							large
							color="success"
							class="button ma-5"
							>Continue</v-btn
						>
					</v-stepper-content>
				</v-stepper-item>
				<!-- step 2 -->
				<v-stepper-item>
					<v-stepper-content step="2">
						<v-text-field
							color="black"
							class="ma-5"
							label="Artist Name"
							v-model="artist"
							outlined
							:rules="[rules.required]"
						/>
						<v-text-field
							color="black"
							class="ma-5"
							label="Album name"
							v-model="album"
							outlined
							:rules="[rules.required]"
						/>
						<v-container>
							<v-row dense>
								<v-col cols="6">
									<v-text-field
										color="black"
										class="ma-2"
										label="Album Art"
										v-model="albumImage"
										outlined
										:rules="[rules.required]"
									/>
								</v-col>
								<v-col cols="6">
									<v-expansion-panels flat>
										<v-expansion-panel>
											<v-expansion-panel-header
												>Color Picker</v-expansion-panel-header
											>
											<v-expansion-panel-content>
												<v-color-picker
													class="ma-2"
													v-model="accentColor"
													hide-canvas
													hide-inputs
													mode="hexa"
												></v-color-picker>
												{{ accentColor }}
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
							>Cancel</v-btn
						>
						<v-btn
							@click="stepper = 3"
							outlined
							rounded
							large
							color="sucess"
							class="button ma-5"
							>Continue</v-btn
						>
					</v-stepper-content>
				</v-stepper-item>

				<!-- step 3 -->
				<v-stepper-item>
					<v-stepper-content step="3">
						<v-textarea
							v-model="tabs"
							filled
							color="black"
							label="Tabs"
							rows="3"
						/>

						<v-textarea
							v-model="lyrics"
							filled
							color="black"
							label="Lyrics"
							rows="3"
							:rules="[rules.required]"
						/>

						<v-text-field
							color="black"
							class="ma-5"
							label="Youtube Video"
							v-model="youtubeId"
							outlined
							:rules="[rules.required]"
						/>

						<v-btn
							outlined
							rounded
							large
							color="#c9020f"
							class="button ma-5"
							@click="stepper = 2"
							>Cancel</v-btn
						>

						<v-btn
							@click="CreateSong"
							outlined
							rounded
							large
							color="sucess"
							class="button ma-5"
							>Finish</v-btn
						>
					</v-stepper-content>
				</v-stepper-item>
			</v-stepper>
		</div>
		<v-snackbar v-model="snackbar" :timeout="timeout">
			{{ result }}
			<v-btn color="blue" text @click="snackbar = false">Close</v-btn>
		</v-snackbar>
	</centerCard>
</template>

<script>
import centerCard from './CenterCardPanel'
import SongsService from '../services/SongsService'
export default {
	components: {
		centerCard
	},
	data() {
		return {
			genres: [
				'Acoustic Guitar',
				'Electric & Rock Guitar',
				'Classical & Fingerstyle Guitar',
				'Blues Guitar',
				'Jazz Guitar',
				'Country Guitar & Chicken Picken',
				'R&B and Funk Guitar'
			],
			error: null,
			stepper: 1,
			snackbar: false,
			result: {
				msg: '',
				color: ''
			},

			title: '',
			artist: '',
			userId: this.$store.state.user.id,
			genre: '',
			album: '',
			albumImage: '',
			accentColor: '',
			youtubeId: '',
			lyrics: '',
			tabs: '',

			rules: {
				required: value => !!value || 'Required.'
			}
		}
	},
	methods: {
		backtoSongs() {
			this.$router.push({
				name: 'songs'
			})
		},

		async CreateSong() {
			// check everything is filled
			if (this.title === '') {
				this.snackbar = true
				this.result.msg = 'Please fill in the title'
				this.result.color = 'error'
			} else if (this.artist === '') {
				this.error = 'Please fill in the artist'
				this.result.color = 'error'
			} else if (this.genre === '') {
				this.error = 'Please fill in the genre'
				this.result.color = 'error'
			} else if (this.album === '') {
				this.error = 'Please fill in the album'
			} else if (this.albumImage === '') {
				this.error = 'Please fill in the albumImage'
			} else if (this.youtubeId === '') {
				this.error = 'Please fill in all details'
			} else if (this.lyrics === '') {
				this.error = 'Please fill in all details'
			} else if (this.tabs === '') {
				this.error = 'Please fill in all details'
			} else if (this.accentColor === '') {
				this.error = 'Please fill in all details'
			} else if (!this.$store.state.isUserLoggedIn) {
				this.error = 'Please Log in first'
			} else {
				// create the song on backend
				try {
					var response = await SongsService.CreateSong({
						title: this.title,
						artist: this.artist,
						genre: this.genre,
						album: this.album,
						albumImage: this.albumImage,
						color: this.accentColor,
						youtubeId: this.youtubeId,
						lyrics: this.lyrics,
						tabs: this.tabs
					})
					this.$router.push({
						name: 'songs'
					})
				} catch (error) {
					this.error = error.response.data.error
					console.log(this.error)
				}
				console.log(response.data)
			}
		}
	}
}
</script>
<style scoped>
.step {
	background-color: rgba(65, 0, 0, 0);
}
.button {
	font-weight: bold;
	font-family: 'Shadows Into Light', cursive;
}
</style>
