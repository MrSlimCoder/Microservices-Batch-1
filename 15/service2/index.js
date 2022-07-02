const express = require("express");
const amqplib = require("amqplib");

const app = express();

connect();

async function connect() {
    try {
        const amqpServer = 'amqp://localhost:5672'
        connection = await amqplib.connect(amqpServer)
        channel = await connection.createChannel();
        await channel.assertQueue('service1');

        await channel.consume('service2', (data) => {
            channel.sendToQueue(
                'service1',
                Buffer.from(
                    JSON.stringify({
                        name: "xyz"
                    }),
                ),
            )
            console.log(`Received ${Buffer.from(data.content)}`)
        })
    } catch (error) {
        console.log(error)
    }
}

app.listen(4000, (err) => {
    if (err) console.log(err);
    else console.log(`Server Is Running on PORT 4000`);
})