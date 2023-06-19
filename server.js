'use strict';

const net = require('net');


const HOST = '127.0.0.1';
const PORT = 2005;


const toyCar = net.createServer(socket => {
    
    console.log('CLIENT IS CONNECTED');
    console.log('\n');

    socket.on('data', (data) => {
       
        const info = data;
        console.log(JSON.parse(data.toString()));

        socket.write('INFO SUCCESSFULLY ACCEPTED');
    });

    socket.on('end', () => {
        console.log('\n');
        console.log('CLIENT IS DISCONNECTED');
        
    });
});



toyCar.listen(PORT, HOST, () => {
    console.log(`LISTENING PORT ${PORT}`);
});