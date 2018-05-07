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
    var reported = createReported(thingId)
    device.on('connect', function() {
        console.log('Client connected');
        message = {
            state: {
              reported
            }
          }
        topic = '$aws/things/' + thingId +  '/shadow/update'
        device.publish(topic, JSON.stringify(message), function (err){
            if (err) {console.log("Error: ", err)}
            console.log("message sendt")
        })
    });
}
createReported = function(thingId) {
    var rep = {}
    rep.lat = getRandomArbitrary(69.08074, 69.69974).toFixed(5)
    rep.lng = getRandomArbitrary(18.00281, 18.90281).toFixed(5)
    rep.payload = "Heia jeg er en dummy"
    rep.battery = 3.55
    rep.temperature = 15.3
    rep.sumAcc = 1.1
    rep.updaterate = 30
    rep.latlng = String(rep.lat) + ',' + String(rep.lng)
    return rep 
}

function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}


var dummys = ['00001412','00001413','00001414','00001415']
var i
for (i = 0; i < 4; i++){
    sendSensorData(dummys[i], "gg")
}