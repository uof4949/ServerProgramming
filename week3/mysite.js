const fs = require('fs');
const crypto = require('crypto');
const readline = require('readline');
const r = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});
var key = "My life for aiur!";
var menu = ['사이트명: ', '인터넷주소: ', '아이디: ', '비밀번호: '];
var content = ['', '', '', ''];
var index = 0;
var cipheredOutput = ['', '', '', ''];
var cipher = ['', '', '', '']; 
var decipheredOutput = ['', '', '', ''];
var decipher = ['', '' , '', ''];

if(process.argv[2] == '-store') {
	const handlerForaLine = function(line) {
		content[index] = line;
		index++;
		if(index >= 4) {
			r.close();
			//console.log(content[0]+' '+content[1]+' '+content[2]+' '+content[3]);
				
			for(var i = 0; i < 4; i++) {
				// 암호화
				cipher[i] = crypto.createCipher('aes192', key);
	
				cipher[i].update(content[i], 'utf8', 'base64');
				cipheredOutput[i] = cipher[i].final('base64');
				console.log(cipheredOutput[i]);

				// 파일 쓰기
				fs.appendFileSync('siteinfo.txt', cipheredOutput[i] + '\n', 'utf8'); 
				console.log(cipheredOutput[i] + 'was appended to file!');
			}
			process.exit();
		} // if end.

		r.setPrompt(menu[index]);
		r.prompt();
	}
	r.setPrompt(menu[index]);
	r.prompt();
	r.on('line', handlerForaLine);
}
else if(process.argv[2] == '-restore') {
	// console.log('restore');
	// read file
	var data = fs.readFileSync('siteinfo.txt', 'utf8');
	// split data by line
	var str = data.split('\n');

	for(var i = 0; i < 4; i++) {
		// decryption
		decipher[i] = crypto.createDecipher('aes192', key);
		decipher[i].update(str[i], 'base64', 'utf8');
		decipheredOutput[i] = decipher[i].final('utf8'); 

		console.log(decipheredOutput[i]);
	}
	process.exit();
}
