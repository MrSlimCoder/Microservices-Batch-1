const express = require("express");
const axios = require("axios");
const to = require('await-to-js').default;

const app = express();

app.get("/", async (req, res) => {
    const data = req.body;

    const [userError, { data: user }] = await to(axios.get("http://localhost:5000", data));
    if (user) {
        const [detailError, { data: detail }] = await to(axios.get("http://localhost:4000", {
            _id: user?.detail
        }));
        return res.status(200).send(detail);
    }
})

app.listen(6000, (err) => {
    if (err) console.log(err);
    else console.log(`Server Is Running on PORT 6000`);
})