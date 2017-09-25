const avar = require("./avatar.js");
const engine = require('./engine');
// const express = require('express');
// const mysql = require('mysql');

console.log("운동전 힘 : ", avar.power);
avar.run();
console.log("운동후 힘 : ", avar.power);

console.log(engine.b);
console.log(engine.c());
