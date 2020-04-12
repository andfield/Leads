console.log('Server Started')

//importing modules
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');

//creating a express object, Using body parser 
//to allow all the json data to perform smoothly,
//Using morgan to automatically log requests,
//Using cors to let any ip join.
const app = express();
app.use(bodyParser.json());
app.use(morgan('combined'));
app.use(cors());

app.get('/status', (req, res) => {
    res.send({
        message: "Hello World"
    })
})

app.post('/register', (req, res) => {
    res.send({
        message: `${req.body.email} has been registered.`
    })
})

//set port
app.listen(process.env.PORT || 8081);