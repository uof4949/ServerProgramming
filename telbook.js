console.log('=== 주소록에 등록할 정보입니다. ====');
console.time('입력처리하는데 걸린시간은 ');
process.argv.forEach( function(item, index) {
	if(item == '-name') {
		console.log('이름 : ' + process.argv[index + 1]);
	}
	else if(item == '-age') {
		console.log('나이 : ' + process.argv[index + 1]);
	}
	else if(item == '-tel') {
		console.log('핸드폰 : ' + process.argv[index + 1]);
	}
});
console.log('-----------------------------------------');
console.timeEnd('입력처리하는데 걸린시간은 '); 
