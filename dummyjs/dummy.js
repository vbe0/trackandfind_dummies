var awsIot = require('aws-iot-device-sdk');


var thingName = '00001412'; // Replace with your own thing name

var http = require('http');
var fs = require("fs");



sendSensorData = function (thingId, data) {
    var device = awsIot.device({
        keyPath: './certs/' + thingId +  '/privkey.pem',
       certPath: './certs/' + thingId +  '/cert.pem',
         caPath: './certs/ca.pem',
       clientId: thingId,
           host: 'a31ovqfkmg1ev8.iot.eu-west-1.amazonaws.com'
     });
    // When the MQTT client connects, subscribe to the thing topic
    device.on('connect', function() {
        console.log('Client connected');
        //message = "69.68854 18.76281 3.552652V"
        message = {
            state: {
              reported: {
                latlng: (69.67754, 18.76281),
                payload: "69.68974,18.74281,3.552652V"
              }
            }
          }
        topic = '$aws/things/' + thingId +  '/shadow/update'
        device.publish(topic, JSON.stringify(message), function (err){
            if (err) {console.log("Error: ", err)}
            console.log("message sendt")
        })
    });
}


sendSensorData('00001412', "gg")