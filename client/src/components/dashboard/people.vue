<template>
	<span>
		<card title="Every Fucking Person">
			<div slot="mainContent">
				<v-container slot="mainContent" class="mt-2">
					<v-row dense>
						<v-col cols="12" v-for="user in peoples" :key="user.id">
							<v-hover>
								<template v-slot:default="{ hover }">
									<v-card color="grey" dark>
										<div class="d-flex flex-no-wrap justify-space-between">
											<div>
												<v-card-title class="headline" v-text="user.username" />

												<v-card-subtitle class="mt-2">
													<ul>
														<li>{{ user.email }}</li>
														<li>{{ user.username }}</li>
														<li>{{ user.email }}</li>
													</ul>
												</v-card-subtitle>
											</div>

											<v-avatar class="ma-3 " color="white" size="125" tile>
												<v-icon color="black" size="100">mdi-account</v-icon>
											</v-avatar>
										</div>
										<v-fade-transition>
											<v-overlay v-if="hover" absolute color="#036358">
												<v-btn @click="viewAccount(user.id)">view account</v-btn>
												<v-btn
													v-if="$store.state.isUserLoggedIn"
													@click="follow(user.id)"
													>follow</v-btn
												>
											</v-overlay>
										</v-fade-transition>
									</v-card>
								</template>
							</v-hover>
						</v-col>
					</v-row>
				</v-container>
			</div>
		</card>
	</span>
</template>

<script>
import socialService from '@/services/socialService'
import card from '../shared/CenterCardPanel'
export default {
	components: { card },
	data() {
		return {
			peoples: null,
			overlay: false,
			result: false
		}
	},

	async mounted() {
		this.peoples = (await socialService.findAll()).data
		console.log(peoples)
	},

	methods: {
		async follow(followingid) {
			const data = {
				userId: this.$store.state.user.id,
				followerId: followingid
			}
			this.result = (await socialService.follow(data)).data
		},

		viewAccount(id){
			//view account feature
		}

	}
}
</script>

<style scoped></style>
