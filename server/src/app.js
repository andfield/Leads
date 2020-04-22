//importing modules
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const routes = require('./routes')
//Getting the sequelize attribute from the models folder.
const { sequelize } = require('./models')
const config = require('./config/config')

const app = express(); //creating a express object, Using 
app.use(bodyParser.json()); //body parser to allow all the json data to perform smoothly,
app.use(morgan('combined')); //Using morgan to automatically log requests,
app.use(cors()); //Using cors to let any ip join.

//connect sequelize to database and start server.
sequelize.sync().then(() => {
    //set port and start server.
    app.listen(config.port);
    console.log(`Server has started on port ${config.port}`)
    routes(app)
})

