var awsIot = require('aws-iot-device-sdk');


var thingName = '00001412'; // Replace with your own thing name

var http = require('http');
var fs = require("fs");


var device = awsIot.device({
   keyPath: './certs/privkey.pem',
  certPath: './certs/cert.pem',
    caPath: './certs/ca.pem',
  clientId: thingName,
      host: 'a31ovqfkmg1ev8.iot.eu-west-1.amazonaws.com'
});


getSensorData = function () {

    // When the MQTT client connects, subscribe to the thing topic
    device.on('connect', function() {
        console.log('Client connected');
        message = "69.68854 18.76281 3.552652V"
        topic = "thing-update/INF-3910-3-v18/animal_tracker/00001412"
        device.publish(topic, message, function (err){
            console.log("Error?: ", err)
        })
    });

    // device.on('message', function(topic, payload) {
    //     //console.log('Message: ', topic, payload.toString());
    //     s = JSON.parse(payload.toString())['state']['reported']['payload'];
    //     console.log('Message: ', s)
    //     console.log("GG: ", payload.toString())
    //     // Broadcast the message to any connected socket clients
    //     return s;
        
    // });
}

getSensorData()