const { Song } = require('../models')

module.exports = {
    //get all songs from db but limit it to 10 so the UI is not fucked
    async getAllSongs(req, res) {
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

    //Create a song 
    async CreateSong(req, res) {
        try {
            const song = await Song.create(req.body)
            res.send(song)
        } catch (err) {
            res.status(500).send({
                error: 'OOPS Something Went Wrong in creating song!!'
            })
        }
    },
}