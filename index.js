const express = require('express');

const Hubs = require('./data/hubs-model.js');

const server = express();



server.get('/', function(request, response) {
    response.send({ hello: 'web 25!' });
});








//Hubs List//
server.get('/api/hubs', (req, res) => {
    Hubs.find()
    .then(hubs => {
        res.status(200).json(hubs)
    })
    .catch(error => {
        console.log(error);

        res.status(500).json({errorMessage: "NO HUBZ 4 U"})
    })
})

// create-a-hub//
server.post('/api/hubs', (req, res) => {
    const hubData = req.body;

    Hubs.add(hubData).then().catch(error => {
        res.status
    })
})

const port = 9000;
server.listen(port, () => console.log(`\n ** api on port: ${port} ** \n`));


// Installing express: "npm i express"//// Running Server: npm run server//