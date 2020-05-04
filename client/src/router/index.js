import Vue from 'vue'
import Router from 'vue-router'
import landingpage from '../components/NewUser/LandingPage'
import Register from '../components/NewUser/Register'
import login from '../components/NewUser/login'
// import songs from '@/components/songs'
// import CreateSong from '@/components/CreateSong'
import song from '../components/shared/song'
// import editSong from '@/components/editSong'
import dashboard from '../components/dashboard/userBoard'
import people from '../components/dashboard/people'
import store from '../store/store'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'landingpage',
      component: landingpage,
      beforeEnter: (to, from, next) => {
        if (!store.state.isUserLoggedIn) {
          next()
        } else {
          console.log("Access Denied")
          next({
            name: 'dashboard'
          })
        }
      }
    },
    {
      path: '/register',
      name: 'Register',
      component: Register,
      beforeEnter: (to, from, next) => {
        if (!store.state.isUserLoggedIn) {
          next()
        } else {
          console.log("Access Denied")
          next({
            name: 'dashboard'
          })
        }
      }
    },
    {
      path: '/login',
      name: 'login',
      component: login,
      beforeEnter: (to, from, next) => {
        if (!store.state.isUserLoggedIn) {
          next()
        } else {
          console.log("Access Denied")
          next({
            name: 'dashboard'
          })
        }
      }
    },
    {
      path: '/songs/:SongId',
      name: 'song',
      component: song
    },
    // {
    //   path: '/songs',
    //   name: 'songs',
    //   component: songs
    // },
    // {
    //   path: '/songs/create',
    //   name: 'create',
    //   component: CreateSong,
    //   meta: {
    //     auth: true
    //   },
    //   beforeEnter: (to, from, next) => {
    //     if (store.state.isUserLoggedIn) {
    //       next();
    //     } else {
    //       console.log("Access Denied");
    //     }
    //   }

    // },


    // {
    //   path: '/songs/editSong/:SongId',
    //   name: 'editSong',
    //   component: editSong,
    //   meta: {
    //     auth: true
    //   },
    //   beforeEnter: (to, from, next) => {
    //     if (store.state.isUserLoggedIn) {
    //       next();
    //     } else {
    //       console.log("Access Denied");
    //     }
    //   }

    // },

    {
      path: '/userBoard/',
      name: 'dashboard',
      component: dashboard,
      meta: {
        auth: true
      },
      beforeEnter: (to, from, next) => {
        if (store.state.isUserLoggedIn) {
          next()
        } else {
          next({
            name: "landingpage"
          })
          console.log("Access Denied")
        }
      }
    },

    {
      path: '/people/',
      name: 'people',
      component: people,
      meta: {
        auth: true
      },
      beforeEnter: (to, from, next) => {
        if (store.state.isUserLoggedIn) {
          next()
        } else {
          next({
            name: 'landingpage'
          })
          console.log("Access Denied")
        }
      }
    }

  ],
  mode: 'history',

})
