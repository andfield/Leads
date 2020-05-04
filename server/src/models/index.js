// entry point for all the models
const fs = require('fs')
const path = require('path')
const Sequelize = require('sequelize')
const config = require('../config/config')
const db = {}

const sequelize = new Sequelize(
  config.db.database,
  config.db.user,
  config.db.password,
  config.db.options
)

// read through current dir
fs.readdirSync(__dirname)

// filter everything but index.js
  .filter((file) =>
    file !== 'index.js'
  )
// for each file declare a model
  .forEach((file) => {
    const model = sequelize.import(path.join(__dirname, file))
    db[model.name] = model
  })
db.sequelize = sequelize
db.Sequelize = Sequelize

module.exports = db
