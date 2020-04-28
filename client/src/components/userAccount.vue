<template>
  <centerCard :title="user.username">
    <div slot="mainContent">
      <h2>Songs</h2>
      <v-divider />
      <ul>
        <li>title:</li>
        <li>artist:</li>
        <li>genre:</li>
      </ul>
    </div>
  </centerCard>
</template>

<script>
import appNav from './AppNav'
import centerCard from './CenterCardPanel'
import SongsService from '../services/SongsService'
export default {
  components: {
    appNav,
    centerCard
  },
  data () {
    return {
      user: this.$store.state.user,
      songs: null
    }
  },
  async mounted () {
    this.songs = (await SongsService.getByUser(this.user.id)).data
  }
}
</script>

<style scoped>
</style>
