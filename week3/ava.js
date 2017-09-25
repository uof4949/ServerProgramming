const fs = require('fs');
var energy, power;

exports.init = function() {
	energy = 30;
	power = 30;
};

exports.print = function() {
	console.log('energy : ' + energy);
	console.log('power : ' + power);
};

exports.eat = function() {
	if(energy < 1000) 
		energy++;
	if(power > 1)
		power--;
};

exports.sleep = function() {
	if(energy > 1)
		energy--;
	if(power > 1)
		power--;
};

exports.exercise = function() {
	if(energy > 1)
		energy--;
	if(power < 1000)
		power++;
};

exports.save = function() {
	fs.appendFileSync('avatar.txt', 'energy : ' + energy + '\n', 'utf8');
	fs.appendFileSync('avatar.txt', 'power : ' + power + '\n', 'utf8');
};