'use strict';

const net = require('net');

const HOST = '127.0.0.1';
const PORT = 2005;


const remoteControl = new net.Socket();

remoteControl.connect(PORT, HOST, () => {

    const info = {
        turn: 20,
        speed: 100,
        light: 0
    };

    console.log("CONNECTED TO SERVER");

    remoteControl.write(JSON.stringify(info));

});

remoteControl.on('data', (data) => {

    console.log('\n');
    console.log(data.toString())
    console.log('\n');
    console.log("DISCONECTED FROM SERVER");
    remoteControl.end();
});
