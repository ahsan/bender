/*
Handler for AWS Lambda function
*/

const {randomQuote} = require('./random.quote');
const fs = require('fs');
const ejs = require('ejs');

const quoteTemplate = fs.readFileSync('./templates/quote.ejs').toString();

exports.handler = (event, context, callback) => {
    // populate the template with a random quote
    const renderedQuote = ejs.render(quoteTemplate, randomQuote());
    // callback is sending HTML back

    const response = {
        "headers": {
            "BENDER_VERSION": 1
        },
        "body": renderedQuote
    }
    callback(null, response);
}