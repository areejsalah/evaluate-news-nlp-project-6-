const dotenv = require('dotenv');
dotenv.config();

const fetch = require('node-fetch')
var path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')
//API credentials
const baseURL = 'https://api.meaningcloud.com/sentiment-2.1?lang=auto&url=';
const API_KEY = process.env.API_KEY

const app = express()

app.use(express.static('dist'))

console.log(__dirname)

app.get('/', function (req, res) {
    // res.sendFile('dist/index.html')
    res.sendFile(path.resolve('dist/index.html'))
})

app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})

//Post route
app.post("/call", async (req, res) => {
    //save the URL entered by the user
    let articleURL = req.body;

    console.log('url sent to the server', articleURL);

    const resp = await fetch(baseURL+articleURL+API_KEY);
    console.log(resp)

        try{
            const data = await resp.json();
            console.log('Object coming from API', data);
            
            //send API data to client side
            res.send(data);

        }catch(error){
            console.log('Error when calling API', error)
        }
})

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log('Example app listening on port 8081!')
})