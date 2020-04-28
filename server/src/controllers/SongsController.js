const { Song } = require('../models')

module.exports = {
  // get all songs from db but limit it to 10 so the UI is not fucked
  async getAllSongs (req, res) {
    try {
      const songs = await Song.findAll({
        limit: 10
      })
      res.send(songs)
    } catch (err) {
      res.status(500).send({
        error: 'OOPS Something Went Wrong in finding songs!!'
      })
    }
  },

  // get all songs created by current user
  async getByUser (req, res) {
    try {
      const songs = await Song.findAll({
        where: {
          userId: req.params.userId
        }
      })
      res.send(songs)
    } catch (err) {
      res.status(500).send({
        error: 'Oops something went wrong in finding your songs!!'
      })
    }
  },

  // Create a song
  async CreateSong (req, res) {
    try {
      const song = await Song.create(req.body)
      res.send(song)
    } catch (err) {
      res.status(500).send({
        error: 'OOPS Something Went Wrong in creating song!!'
      })
    }
  },

  // Get Song by Id
  async getById (req, res) {
    try {
      const song = await Song.findByPk(req.params.SongId)
      res.send(song)
    } catch (err) {
      res.status(500).send({
        error: 'Cant find the Song data'
      })
    }
  },

  // Edit Song by Id
  async editById (req, res) {
    try {
      await Song.update(req.body, {
        where: {
          id: req.body.id
        }
      })
      res.send(req.body)
    } catch (err) {
      res.status(500).send({
        error: 'Unable to update the song'
      })
    }
  }
}
