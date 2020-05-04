<template>
	<v-app>
		<appbar />
		<v-content class="ma-4">
			<router-view></router-view>
		</v-content>
	</v-app>
</template>

<script>
import appbar from './components/shared/appbar'
export default {
	name: 'App',
	components: { appbar },
	data: () => ({})
}
</script>

<style>
a {
	text-decoration: none;
}
</style>
