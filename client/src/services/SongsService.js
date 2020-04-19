import api from '@/services/api.js';

export default {
    //method when called will pass a get request on the server.
    getAllSongs() {
        return api().get('songs')
    },

    CreateSong(credentials) {
        return api().post('songs', credentials)
    }
}