const fs = require('fs');

// read the JSON file
const quotes = JSON.parse(fs.readFileSync('./quotes.json'));

module.exports.randomQuote = () => {
    return quotes[Math.floor(Math.random()*quotes.length)];
}