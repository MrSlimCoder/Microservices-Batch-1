const bodyParser = require("body-parser");
const morgan = require("morgan");

module.exports = {
    bodyParser: bodyParser.json(),
    morgan: morgan("tiny")
}