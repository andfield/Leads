const AuthenticationController=require('./controllers/AuthenticationController')
const AuthenticationControllerPolicy=require('./policies/AuthenticationControllerPolicy')
const SongsController=require('./controllers/SongsController')
const socialController=require('./controllers/socialController')

module.exports=(app) => {
  app.get('/status', (req, res) => {
    res.send({
      message: 'Hello World'
    })
  })

  app.post('/register',
    // middleware to check if data is alg.
    AuthenticationControllerPolicy.register,

    AuthenticationController.register
  )

  app.post('/login',
    AuthenticationController.login
  )

  app.get('/songs',
    SongsController.getAllSongs
  )

  app.post('/songs',
    SongsController.CreateSong
  )
  app.get('/songs/:SongId',
    SongsController.getById
  )

  app.put('/songs/editSong/:SongId',
    SongsController.editById
  )

  app.get('/myAccount/:userId',
    SongsController.getByUser
  )

  app.get('/people',
    socialController.getAllUsers

  )

  app.post('/people/follow',
    socialController.follow
  )
}
