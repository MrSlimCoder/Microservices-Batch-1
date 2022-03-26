// console.log("Hello World");

// var http = require('http');
// http.createServer(function (req, res) {
//   res.writeHead(200, {'Content-Type': 'text/plain'});
//   res.write('Hello World!');
//   res.end();
// }).listen(8080);


// var fs = require('fs');

// fs.readFile('demofile.txt', 'utf8', function(err, data) {
//   if (err) throw err;
//   console.log(data);
// });

const express = require('express');
const app = express();

// API (Application Programming Interface)
app.get('/api', function (req, res) {
  res.send('Hello World');
})

app.get("/api/user",(req,res) => {
    res.status(200).json({
        message: "User Data",
        data: [{
            name: "Uzair",
            age: "26",
        }]
    })
})

// API Methods
// Get() - send resources from Server to frontend
// Post() - send resources from frontend to Server
// Put() - update resources from Server to frontend
// Patch() - update resources from frontend to Server (only couple of fields)
// Delete() - delete resources from Server to frontend

app.listen(3000, (err) => {
    if(err) console.log(err);
    else console.log("Server is running");
})