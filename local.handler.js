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
            for (const [key, value] of Object.entries(response.headers)) {
                res.set(key, value);
            }
            res.status(200).send(response.body);
        }
    })
})

app.listen(port, () => console.log(`Application listening on port ${port}!`))
