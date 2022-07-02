const express = require("express");
const amqplib = require("amqplib");
const bodyParser = require("body-parser");

const app = express();


app.use(bodyParser.json());

connect();

// connect to rabbitmq
async function connect() {
    try {
        // rabbitmq default port is 5672
        const amqpServer = 'amqp://localhost:5672'
        connection = await amqplib.connect(amqpServer)
        channel = await connection.createChannel();
        await channel.assertQueue('service2');
        console.log("RabbitMQ Connected");
    } catch (error) {
        console.log(error)
    }
}

app.post('/', (req, res) => {
    const data = req.body;
    channel.sendToQueue(
        'service2',
        Buffer.from(
            JSON.stringify({
                ...data
            }),
        ),
    )
    channel.consume('service1', (data) => {
        console.log(`Received ${Buffer.from(data.content)}`)
    })

    return res.status(200).json({
        message: "Sended to service2 Queue",
        success: true
    })
})

app.listen(3000, (err) => {
    if (err) console.log(err);
    else console.log(`Server Is Running on PORT 3000`);
})