'use strict';

const net = require('net');

const HOST = '127.0.0.1';
const PORT = 2005;
const PASSWORD = 'MyBirthdayDay';

const randomNum = (min,max) => Math.floor(Math.random() * (max - min) + min);

const TURN = randomNum(-127,128);
const SPEED = randomNum(0,256);
const HEADLIGHTS = randomNum(0,2);

const client = new net.Socket();

client.connect(PORT, HOST, () => {
    
    console.log("CONNECTED TO THE SERVER");
    
    client.write(TURN);
    client.write(SPEED);
    client.write(HEADLIGHTS);
});
   

client.on('close', () => {
    console.log('DISCONNECTED FROM SERVER');
});


    




