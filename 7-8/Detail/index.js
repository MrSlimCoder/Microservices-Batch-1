require("dotenv").config();

const express = require('express');
require("./config/mongodb");

const middleware = require("./middleware");
const details = require("./routes/details");

const app = express();

app.use(middleware.bodyParser);
app.use(middleware.morgan);

app.use("/",details);

app.listen(process.env.PORT, (err) => {
    if (err) console.log(err);
    else console.log(`Server Is Running on PORT ${process.env.PORT}`);
})