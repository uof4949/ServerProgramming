const url = require('url');

// 모듈을 사용합니다.
var parsedObject = url.parse('http://www.naver.com');
console.log(parsedObject);
console.log("------------------------");
console.log('프로토콜 : ', parsedObject.protocol);
console.log('호스트주소 : ', parsedObject.hostname);
console.log('포트주소 : ', parsedObject.port);
console.log("------------------------");
