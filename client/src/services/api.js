// This file is used to set up a connector used to hit backend.

// imports
import axios from 'axios'

export default () => {
  // create a axios object
  return axios.create({

    // Point to backend url.
    baseURL: `http://localhost:8081/`
  })
}
