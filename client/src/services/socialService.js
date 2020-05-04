import api from '@/services/api.js'

export default {
    
  findAll () {
    return api().get('/people')
  },
  follow (data) {
      return api().post('/people/follow', data)
    
  }
}
