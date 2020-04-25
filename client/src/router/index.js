import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Register from '@/components/Register'
import login from '@/components/login'
import songs from '@/components/songs'
import CreateSong from '@/components/CreateSong'
import song from '@/components/song'
import editSong from '@/components/editSong'
import userAccount from '@/components/userAccount'

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
      path: '/myAccount',
      name: 'myAccount',
      component: userAccount
    },
    {
      path: '/songs',
      name: 'songs',
      component: songs
    },
    {
      path: '/songs/create',
      name: 'create',
      component: CreateSong
    },
    {
      path: '/songs/:SongId',
      name: 'song',
      component: song
    },

    {
      path: '/songs/editSong/:SongId',
      name: 'editSong',
      component: editSong
    },

  ],
  mode: 'history'
})
