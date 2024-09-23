const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const cors = require('cors');
dotenv.config();

const fetch = require('node-fetch')
var path = require('path')
const express = require('express')
//API credentials
const API_KEY = process.env.API_KEY
console.log(`Your API Key is ${process.env.API_KEY}`);


const app = express()

app.use(express.static('dist'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))
app.use(cors())

console.log(__dirname)

app.get('/', function (req, res) {
    // res.sendFile('dist/index.html')
    res.sendFile(path.resolve('dist/index.html'))
})

//Post route
app.post('/api', async (req, res) => {
    
    
    //save the URL entered by the user
    let articleURL = req.body.urlText;
    
    console.log('url sent to the server', articleURL);

   
    console.log(`You entered: ${articleURL}`);
    
   
    const resp = await fetch("https://api.meaningcloud.com/sentiment-2.1?key=" + API_KEY + "&url=" + articleURL + "&lang=en");

    console.log('response url:', resp);
    //Data to be extracted from API response
    //polarity: (positive/'negative')
    //subjectivity: ('subjective', factual)
    //text: a text snippet from the article 

    try {
        const data = await resp.json();
        // console.log(data);
        //send API data to client side
        res.send(data);
        console.log("the output",data)
      } catch (err) {
        console.log("error", err);
      }
})

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log('Example app listening on port 8081!')
})