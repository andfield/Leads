<template>
	<v-app>
		<v-content>
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
