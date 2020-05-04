<template>
	<span>
		<div class="team" v-for="item in genres" :key="item.title">
			<v-container>
				<h1 class="subheading grey--text">{{ item.title }}</h1>
				<v-divider />
				<v-layout row wrap>
					<!-- eslint-disable -->
					<v-flex
						xs12
						sm6
						md4
						lg3
						v-for="song in songs"
						v-if="checker(item.title, song.genre)"
						:key="song.id"
					>
					<!-- eslint-enable -->
						<v-hover>
							<template v-slot:default="{ hover }">
								<v-card :color="song.color" class="text-center ma-3">
									<v-responsive class="pt-4">
										<v-img
											aspect-ratio="1.5"
											contain
											:src="song.albumImage"
										></v-img>
									</v-responsive>
									<v-card-text>
										<div class="display-1">{{ song.title }}</div>
										<div class="font-weight-bold">{{ song.artist }}</div>
									</v-card-text>
									<v-fade-transition>
										<v-overlay v-if="hover" absolute>
											<v-btn @click="details(song.id)">See Details</v-btn>
											<!-- <v-btn
												v-if="$store.state.isUserLoggedIn"
												@click="editSong(song.id)"
												>Edit</v-btn
											> -->
										</v-overlay>
									</v-fade-transition>
								</v-card>
							</template>
						</v-hover>
					</v-flex>
				</v-layout>
			</v-container>
		</div>
	</span>
</template>

<script>
import SongsService from '@/services/SongsService.js'
import appbar from '../shared/appbar'
export default {
	components: {
		appbar
	},
	data() {
		return {
			overlay: false,
			user: null,
			songs: null,
			genres: [
				{ title: 'Acoustic Guitar' },
				{ title: 'Electric & Rock Guitar' },
				{ title: 'Classical & Fingerstyle Guitar' },
				{ title: 'Blues Guitar' },
				{ title: 'Jazz Guitar' },
				{ title: 'Country Guitar & Chicken Picken' },
				{ title: 'R&B and Funk Guitar' }
			]
		}
	},
	async mounted() {
		this.user = this.$store.state.user
		this.songs = (await SongsService.getByUser(this.user.id)).data
	},
	methods: {
		checker(test, subject) {
			console.log('Entered checkers with ' + test + ' and ' + subject)
			if (test == subject) {
				return true
			} else {
				console.log('Checker has returned false!!')
				return false
			}
		},
		details(id) {
			console.log('Song id: ' + id)
			this.$router.push({
				name: 'song',
				params: {
					SongId: id
				}
			})
		}
	}
}
</script>

<style scoped>
.header {
	font-family: 'Shadows Into Light', cursive;
}
</style>
