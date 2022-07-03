const express = require("express");
const axios = require("axios");
const to = require('await-to-js').default;
const amqplib = require("amqplib");

const app = express();

setTimeout(() => connect(), 20000);

// connect to rabbitmq
async function connect() {
    try {
        const amqpServer = 'amqp://rabbitmq';
        connection = await amqplib.connect(amqpServer)
        channel = await connection.createChannel();
        await channel.assertQueue('logs');
        channel.sendToQueue(
            'logs',
            Buffer.from(
                JSON.stringify({
                    status: "connected"
                }),
            ),
        )
        console.log("RabbitMQ Connected");
    } catch (error) {
        console.log(error)
    }
}

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