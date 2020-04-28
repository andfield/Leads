import api from '@/services/api.js'

export default {
  // method when called will pass a get request on the server.
  getAllSongs () {
    return api().get('songs')
  },

  CreateSong (credentials) {
    return api().post('songs', credentials)
  },
  editSong (song) {
    return api().put(`songs/editSong/${song.id}`, song)
  },
  getById (SongId) {
    return api().get(`songs/${SongId}`)
  },
  getByUser (userId) {
    return api().get(`myAccount/${userId}`)
  }
}
