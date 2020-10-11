require('dotenv').config()
const express = require('express')
const request = require('request')
const bodyParser = require('body-parser')
const path = require('path')
const hbs = require('hbs')
const utils = require('./utils')
const app = express()
const port = process.env.PORT || 3000;

const url = 'http://api.weatherstack.com/current?access_key=' + process.env.ACCESS_KEY + '&query=';


// Set up handlebars engine and templates location
app.set('view engine', 'hbs')
app.use(bodyParser.urlencoded({
    extended: true
}))
app.use(bodyParser.json())
app.use(express.static(path.join(__dirname, '/public')));
app.set('views', path.join(__dirname, 'templates', 'views'));
hbs.registerPartials(path.join(__dirname, 'templates', 'partials'))


app.get('/', (req, res) => {
    res.render('index')
})

app.get('/weather', (req, res) => {

    if (!req.query.city) {
        return res.render('error', {
            error_msg: 'You must provide a city'
        })
    }

    let city = req.query.city

    if (!utils.isValidCity(city)) {
        city = utils.bestMatch(city)
        console.log(city);
        if (!city)
            return res.render('error', {
                error_msg: 'Not a valid city'
            })
    }

    request(url.concat(city), {}, function (error, response, body) {
        if (error) {
            res.render('error', {
                error_msg: 'Connection failed. Bad request.'
            })
        }
        const data = JSON.parse(body)
        return res.render('weather', data)
    });
});


app.get('/about', (req, res) => {
    res.render('about')
})

app.get('/contact', (req, res) => {
    res.render('contact')
})


app.get('*', (req, res) => {
    return res.render('error', {
        error_msg: 'Page not found. Please contact administrator'
    })
})

app.listen(port, () => {
    console.log(`Demo app listening at http://localhost:${port}`)
})