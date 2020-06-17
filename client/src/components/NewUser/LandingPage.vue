<template>
	<span>
		<appbar />
		<v-parallax :src="images.first" height="950">
			<v-layout column align-center justify-center class="white--text">
				<h1
					class="white--text mb-12 display-3 text-xs-center animated bounceInDown"
					style="font-weight: 900"
				>
					Tabs Checker
				</h1>
				<h1
					class="white--text mb-2 display-1 text-xs-center"
					style="font-weight: 900"
				>
					The social network for epic guitarists
				</h1>
				<div
					class="white--text subheading mb-3 text-xs-center"
					style="font-weight: 900"
				>
					A network for epic Musicians Unlesh your creativity together
				</div>
				<v-btn class="blue lighten-2 mt-5" dark text large href="/register">
					Get Started
				</v-btn>
			</v-layout>
		</v-parallax>
		<v-content>
			<section>
				<v-layout column wrap class="my-5" align-center>
					<v-flex xs12>
						<v-container grid-list-xl>
							<v-layout row wrap align-center>
								<v-flex xs12 md4>
									<v-card class="elevation-0 transparent">
										<div class="layout justify-center text-xs-center">
											<v-icon x-large class="blue--text text--lighten-2"
												>mdi-earth</v-icon
											>
										</div>
										<v-card-title primary-title class="layout justify-center">
											<div class="headline text-xs-center">Reach the world</div>
										</v-card-title>
										<v-card-text>
											Show your music to the whole community of Musicians not
											only to your mum or your friends. I am developing this app
											to make good music viral. In this moment TabsChecker is
											used by guitarists who are not famous but that want to
											share their works to the world.
										</v-card-text>
									</v-card>
								</v-flex>
								<v-flex xs12 md4>
									<v-card class="elevation-0 transparent">
										<div class="layout justify-center text-xs-center">
											<v-icon x-large class="blue--text text--lighten-2"
												>mdi-account-group</v-icon
											>
										</div>
										<v-card-title primary-title class="layout justify-center">
											<div class="headline">Fast Collab</div>
										</v-card-title>
										<v-card-text>
											Time is important, we don't want you to waste it. Here you
											can get a massive feedback from real Musicians in minutes.
											And if your stuff is appreciated you won't only get
											positive feedback but also lovely and sincere fans. Just
											dont be a wuss when people think your music is trash
										</v-card-text>
									</v-card>
								</v-flex>
								<v-flex xs12 md4>
									<v-card class="elevation-0 transparent">
										<div class="layout justify-center text-xs-center">
											<v-icon x-large class="blue--text text--lighten-2"
												>mdi-guitar-acoustic</v-icon
											>
										</div>
										<v-card-title primary-title class="layout justify-center">
											<div class="headline text-xs-center">
												Create new connections
											</div>
										</v-card-title>
										<v-card-text>
											Imagine if you can directly speak with the world's
											population. Don't you think it would be easier to find
											nice musicians to create music with? TabsChecker is both
											local and global and help you to connect without
											limitations with people from your city, your state and
											your universe!
										</v-card-text>
									</v-card>
								</v-flex>
							</v-layout>
						</v-container>
					</v-flex>
				</v-layout>
			</section>

			<section>
				<v-parallax :src="images.second" height="380">
					<v-layout column align-center justify-center>
						<div
							class="headline white--text mb-3 mt-3 text-xs-center"
							style="font-weight: 900"
						>
							Are you amazed? Stay tuned!
						</div>
						<div class="hidden-sm-and-down">
							FFS I am lunching the beta in a few months. If you want to be one
							of the first TabsChecker users I will email you as soon as the app
							ready. In the beginning only few people will test before the
							launch. Let me know how Endorfine will help you!
						</div>
						<v-flex xs8 class="mt-5">
							<v-card dark class="transparent" flat outlined>
								<v-card-text>
									<v-text-field
										label="Email"
										outlined
										:rules="emailRules"
										v-model="email"
									></v-text-field>

									<v-text-field
										color="white"
										outlined
										label="Chuck your curiosities"
										v-model="message"
									></v-text-field>

									<v-flex xs12 class="layout justify-center text-xs-center">
										<v-btn
											class="blue lighten-2 mb-5"
											dark
											text
											large
											v-if="!subscribed"
											@click="staytuned"
											>Get in touch</v-btn
										>
										<v-btn
											v-if="subscribed"
											class="green lighten-2 mb-5"
											disabled
											dark
											large
											text
											>Will get back to you</v-btn
										>
									</v-flex>
								</v-card-text>
							</v-card>
						</v-flex>
					</v-layout>
				</v-parallax>
			</section>

			<section>
				<v-container grid-list-xl>
					<v-layout row wrap justify-center class="my-5">
						<v-flex xs12 sm4>
							<v-card class="elevation-0 transparent">
								<v-card-title primary-title class="layout justify-center">
									<div class="headline">Company info</div>
								</v-card-title>
								<v-card-text>
									Lol this is not a company. I hate companies. Just imagine me
									like the Indian guy from the Silicon Valley series.
								</v-card-text>
							</v-card>
						</v-flex>
						<v-flex xs12 sm4 offset-sm1>
							<v-card class="elevation-0 transparent">
								<v-card-title primary-title class="layout justify-center">
									<div class="headline">I need Help!!</div>
								</v-card-title>
								<v-card-text>
									Are you a creative person? Do you like techy stuff? Complete
									the email form by writing your skills and interests
								</v-card-text>
							</v-card>
						</v-flex>
					</v-layout>
				</v-container>
			</section>

			<v-footer class="blue darken-2">
				<v-layout row wrap align-center>
					<v-flex xs12 class="text-xs-center">
						<div class="white--text ml-3 layout justify-center">
							Made by Siddharth Thakur - 2020
						</div>
					</v-flex>
				</v-layout>
			</v-footer>
		</v-content>
	</span>
</template>

<script>
import appbar from '../shared/appbar'
import emailService from '@/services/emailService'
export default {
	components: {
		appbar
	},
	data: function() {
		return {
			images: {
				first: 'https://images3.alphacoders.com/873/873468.png',
				second: require('@/assets/toto.jpg')
			},
			email: '',
			message: '',
			emailRules: [
				v => {
					return !!v || 'E-mail is required'
				},
				v =>
					/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) ||
					'E-mail must be valid'
			],
			subscribed: false
		}
	},
	methods: {
		async staytuned() {
			try{
				const response = await emailService.staytuned({
					email: this.email,
					message: this.message
				})
				this.subscribed = true
			}
			catch(err){
				this.subscribed = false 
			}
		}
	},

	computed: {
		imgHeight: function() {
			var offset = 320
			console.log('new image height is ' + (this.pageHeight - offset))
			return this.pageHeight - offset
		}
	}
}
</script>

<style scoped>
.finedTitle {
	font-weight: 900;
	text-shadow: 2px 2px #000000;
}

.social-icon {
	font-size: 21px;
	color: white;
}
</style>
