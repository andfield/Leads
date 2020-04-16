import api from '@/services/api.js';

export default {

    //method when called with credentials will pass the credentials through a post request on the server.
    register(credentials) {
        return api().post('register', credentials)
    },
    login(credentials) {
        return api().post('login', credentials)
    }
}