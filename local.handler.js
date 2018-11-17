/*
Local server for testing lambda function
*/

const express = require('express');
const {handler} = require('./lambdaFunc');

const app = express();
const port = 3000;

app.get('/', (req, res) => {
    handler(null, null, (err, response) => {

        if (err) {
            res.status(500).send(err);
        } else {
            res.status(200).send(response);
        }
    })
})

app.listen(port, () => console.log(`Application listening on port ${port}!`))
