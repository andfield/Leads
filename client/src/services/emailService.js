import api from '@/services/api.js'
export default {

    staytuned(data) {
        return api().post('/emailStayTuned', data)
    }


}