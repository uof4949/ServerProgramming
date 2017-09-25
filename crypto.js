// 모듈추출
const crypto = require('crypto');

var key = '아무도 알지 못하는 나만의 비밀 키';
var plaintext = 'PASSWORD';

// 암호화
var cipher = crypto.createCipher('aes192', key);
cipher.update(plaintext, 'utf8', 'base64');
var cipheredOutput = cipher.final('base64');

// 복호화
var decipher = crypto.createDecipher('aes192', key);
decipher.update(cipheredOutput, 'base64', 'utf8');
var decipheredOutput = decipher.final('utf8');

// 출력합니다.
console.log('원래 문자열: ', plaintext);
console.log('암호화: ' + cipheredOutput);
console.log('암호화 해제: ' + decipheredOutput);
