require('dotenv').config()
const express = require("express");
const server = express();
const port = 5000;
const request = require('request');


// req = request
// res = response

server.get('/', (req, res) => res.send('Hello World'))

server.get('/getWeatherToronto', (req,res) => {
    request(
        `http://api.weatherstack.com/current?access_key=${process.env.API_KEY}&query=Toronto`,
        function(error, response, body){
            if(!error && response.statusCode== 200){
                let parsedBody = JSON.parse(body);
                let temperature = parsedBody['current']['temperature']
                res.send({temperature});
            }
        }
    );
});

server.listen(port, ()=> console.log(`Server running on port ${port}`));