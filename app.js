const express = require('express');
const body_parser = require('body-parser')
const ejs = require('ejs');
const axios = require('axios');
const dotenv = require('dotenv')
dotenv.config()

// MidddleWares
const app = express();
app.set('view engine', 'ejs');
app.use(express.static('public'))


//Routes
app.get('/', (req, res) => {
    res.render("index");
});

app.get('/textdoodle', (req, res) => {
    res.render("textdoodle");
})

app.get('/videodoodle', (req, res) => {
    res.render("videodoodle");
})
app.listen(process.env.PORT, () => console.log('Server started http://localhost:5000'));

