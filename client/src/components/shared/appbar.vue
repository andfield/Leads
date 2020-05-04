<template>
	<nav>
		<!-- App Bar -->
		<v-app-bar app class="appbar" color="#607d8b" dense flat>
			<v-app-bar-nav-icon @click.stop="drawer = !drawer" color="#e0f2f1" />
			<router-link to="/dashboard">
				<v-toolbar-title class=" align-center appbar">
					<v-icon class=" align-center appbar mx-2 mb-3" large
						>mdi-guitar-acoustic</v-icon
					>
					<span class="head">Tabs Checker</span>
				</v-toolbar-title>
			</router-link>

			<v-spacer />

			<v-tooltip v-for="item in nonUser" :key="item.text" bottom>
				<template v-slot:activator="{ on }">
					<v-btn small outlined fab v-on="on" color="#e0f2f1" class="mx-2">
						<v-icon>{{ item.icon }}</v-icon>
					</v-btn>
				</template>
				<span>{{ item.text }}</span>
			</v-tooltip>
		</v-app-bar>

		<!-- Navigation drawer -->
		<v-navigation-drawer v-model="drawer" app class="drawer" color="#607d8b">
			<v-list list dense color="#e0f2f1" class="mt-11">
				<v-list-item
					v-for="item in nonUser"
					:key="'A' + item.text"
					:to="item.url"
					link
					v-if="!isUserLoggedIn"
				>
					<v-list-item-action>
						<v-icon>{{ item.icon }}</v-icon>
					</v-list-item-action>
					<v-list-item-content>
						<v-list-item-title>{{ item.text }}</v-list-item-title>
					</v-list-item-content>
				</v-list-item>

				<v-list-item
					v-if="isUserLoggedIn"
					v-for="item in items"
					:key="'B' + item.text"
					link
					:to="item.url"
				>
					<v-list-item-action>
						<v-icon>{{ item.icon }}</v-icon>
					</v-list-item-action>
					<v-list-item-content>
						<v-list-item-title>{{ item.text }}</v-list-item-title>
					</v-list-item-content>
				</v-list-item>

				<v-list-item @click="logout" v-if="isUserLoggedIn">
					<v-list-item-action>
						<v-icon>mdi-lock</v-icon>
					</v-list-item-action>
					<v-list-item-title>Logout</v-list-item-title>
				</v-list-item>

				<v-subheader class="mt-4 grey--text text--darken-1"
					>Active Friends</v-subheader
				>
				<v-list>
					<v-list-item v-for="item in items2" :key="'C' + item.text" link>
						<v-list-item-avatar>
							<img
								:src="
									`https://randomuser.me/api/portraits/men/${item.picture}.jpg`
								"
								alt
							/>
						</v-list-item-avatar>
						<v-list-item-title v-text="item.text" />
					</v-list-item>
				</v-list>
			</v-list>
		</v-navigation-drawer>
	</nav>
</template>

<script>
export default {
	data: () => ({
		isUserLoggedIn: null,
		drawer: true,
		nonUser: [
			{ icon: 'mdi-magnify', text: 'Browse', url: '/songs' },
			{
				icon: 'mdi-account-key',
				text: 'Enter Cult',
				url: '/login'
			},
			{ icon: 'mdi-account-tie', text: 'Join Cult', url: '/register' }
		],
		items: [
			{ icon: 'mdi-trending-up', text: 'Latest Music', url: '/' },
			{
				icon: 'mdi-youtube-subscription',
				text: 'Bookmarks',
				url: '/bookmarks'
			},
			{
				icon: 'mdi-account',
				text: 'Grand Exchange',
				url: '/people'
			},
			{ icon: 'mdi-account-group', text: 'My Gang', url: '/friends' },
			{
				icon: 'mdi-plus-circle-outline',
				text: 'Find Musicians',
				url: '/allusers'
			},
			{ icon: 'mdi-playlist-play', text: 'Playlists', url: '/playlists' }
		],

		items2: [
			{ picture: 28, text: 'dummy' },
			{ picture: 38, text: 'dummy1' },
			{ picture: 48, text: 'dummy2' },
			{ picture: 58, text: 'dummy3' },
			{ picture: 78, text: 'dummy4' }
		]
	}),

	mounted() {
		this.isUserLoggedIn = this.$store.state.isUserLoggedIn
	},

	methods: {
		logout() {
			this.$store.dispatch('setToken', null)
			this.$store.dispatch('setUser', null)
			this.$router.push({
				name: 'landingpage'
			})
		}
	}
}
</script>

<style scoped>
.appbar {
	color: #e0f2f1;
}
.drawer {
	border-style: solid;
	border-color: black;
}
a {
	color: black;
}
.head {
	font-size: 38px;
	font-family: 'Shadows Into Light', cursive;
}
</style>
