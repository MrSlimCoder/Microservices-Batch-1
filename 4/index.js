require("dotenv").config();

const express = require('express');

const middleware = require("./middleware");
const details = require("./routes/details");

const app = express();

app.use(middleware.bodyParser);
app.use(middleware.morgan);

app.use("/",details);
// app.use("/user",users);

app.listen(process.env.PORT, (err) => {
    if (err) console.log(err);
    else console.log(`Server Is Running on PORT ${process.env.PORT}`);
})