<template>
	<span>
		<div>
			<v-container>
				<v-layout row wrap justify-center>
					<v-flex xs12,sm10,md5, lg5, xl5>
						<v-flex xs6,sm6,md6,lg6,xl6>
							<v-img :src="song.albumImage"></v-img>

							<v-card-subtitle>
								<p>
									{{ song.artist }}
									<br />
									{{ song.album }}
									<br />
									{{ song.genre }}
								</p>
							</v-card-subtitle>
						</v-flex>
						<v-flex xs6,sm6,md6,lg6,xl6>
							<v-card-title v-text="song.title" />
						</v-flex>
					</v-flex>
					<v-flex xs12,sm10,md5, lg5, xl5>
						<CenterCard :title="song.title">
							<div>
								<v-card-subtitle
									>Below are the lyrics with chords</v-card-subtitle
								>
								<v-card-content>
									<v-textarea readonly v-model="song.lyrics" class="mx-5" />
								</v-card-content>
							</div>
						</CenterCard>
					</v-flex>
					<v-flex xs12,sm10,md5, lg5, xl5>
						<CenterCard :title="song.title"> </CenterCard>
					</v-flex>
					<v-flex xs12,sm10,md5, lg5, xl5>
						<CenterCard :title="song.title"> </CenterCard>
					</v-flex>
				</v-layout>
			</v-container>
		</div>

		<v-card-subtitle>Below are the tabs with chords</v-card-subtitle>
		<v-card-content>
			<v-textarea readonly v-model="song.tabs" class="mx-5" />
		</v-card-content>
		<youtube :video-id="id"></youtube>
	</span>
</template>

<script>
import SongService from '@/services/SongsService'
import CenterCard from './CenterCardPanel'
// import { getIdFromURL } from 'vue-youtube-embed'
export default {
	components: {
		CenterCard
	},
	data() {
		return {
			song: {},
			id: ''
		}
	},

	async mounted() {
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
		youtube_parser() {}
	}
}
</script>

<style scoped></style>
