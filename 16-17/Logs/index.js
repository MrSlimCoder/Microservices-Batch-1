require("dotenv").config();

const express = require('express');
const app = express();


const mongoose = require("mongoose");
const amqplib = require("amqplib");

setTimeout(() => connect(), 20000);

async function connect() {
    try {
        const amqpServer = 'amqp://rabbitmq';
        connection = await amqplib.connect(amqpServer)
        channel = await connection.createChannel();
        await channel.consume('logs', (data) => {
            console.log(`Received ${Buffer.from(data.content)}`)
        })
    } catch (error) {
        console.log(error)
    }
}

mongoose.connect(process.env.MONGO_URI, (err) => {
    if (err) console.log(err);
    else console.log("Database is Connected");
});


app.listen(process.env.PORT, (err) => {
    if (err) console.log(err);
    else console.log(`Server Is Running on PORT ${process.env.PORT}`);
})