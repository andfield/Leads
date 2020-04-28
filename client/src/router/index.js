import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Register from '@/components/Register'
import login from '@/components/login'
import songs from '@/components/songs'
import CreateSong from '@/components/CreateSong'
import song from '@/components/song'
import editSong from '@/components/editSong'
import dashboard from '@/components/Dashboard/layout'
import store from '../store/store'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/songs',
      name: 'songs',
      component: songs
    },
    {
      path: '/songs/create',
      name: 'create',
      component: CreateSong,
      meta: {
        auth: true
      },
      beforeEnter: (to, from, next) => {
        if (store.state.isUserLoggedIn) {
          next();
        } else {
          console.log("Access Denied");
        }
      }

    },
    {
      path: '/songs/:SongId',
      name: 'song',
      component: song
    },

    {
      path: '/songs/editSong/:SongId',
      name: 'editSong',
      component: editSong,
      meta: {
        auth: true
      },
      beforeEnter: (to, from, next) => {
        if (store.state.isUserLoggedIn) {
          next();
        } else {
          console.log("Access Denied");
        }
      }

    },

    {
      path: '/dashboard/',
      name: 'dashboard',
      component: dashboard,
      meta: {
        auth: true
      },
      beforeEnter: (tp, from, next) => {
        if (store.state.isUserLoggedIn) {
          next();
        } else {
          next({
            name: "HelloWorld"
          })
          console.log("Access Denied");
        }
      }
    }

  ],
  mode: 'history',

})
