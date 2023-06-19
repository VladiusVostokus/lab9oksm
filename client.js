'use strict';

const net = require('net');

console.log("hello world");

const HOST = 127.0.0.1;
const PORT = 2005;
const PASSWORD = 'MyBirthdayDay';

const randomNum = (min,max) => Math.floor(Math.random() * (max - min) + min);

const TURN = randomNum(-127,128);
const SPEED = randomNum(0,256);
const HEADLIGHTS = randomNum(0,2);
    




