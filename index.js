var readline = require('readline');
var fs = require('fs');
var rl = readline.createInterface({
	input: process.stdin, 
	output: process.stdout 
});
var filename = process.argv.slice(2)[0];
var fs = require('fs');
if(filename!=undefined){
	fs.readFile(filename, function (err, data) {
		if (err){
			fs.writeFile(filename, '') 
		} else {
			console.log(" Результаты прошлых игр: "+data.toString());
		}
	});
}
var arrgamelog = {win:'0', lose:'0'};
rl.question('Введите 1 или 2', function(answer) {
	var check = Math.floor(Math.random() * (1 - 0 + 1)) + 1;
	if(answer==check){
		console.log('Вы угадали! Выпало:'+check);
	} else {
		console.log('Не угадали! Выпало:'+check);
	}
	playmore();
});
function newgame(){
	rl.question('Введите 1 или 2', function(answer) {
		var check = Math.floor(Math.random() * (1 - 0 + 1)) + 1;
		if(answer==check){
			console.log('Вы угадали! Выпало:'+check);
			soc('win');
		} else {
			console.log('Не угадали! Выпало:'+check);
			soc('lose');
		}
		playmore();
	});
}
function playmore(){
	rl.question('Желаете продолжить? (y/n)', function(answer) {
		if(answer=='y'){
			newgame();
		} else {
			var logtext = 'Побед: '+ arrgamelog["win"] +' Поражений '+ arrgamelog["lose"] +' Спасибо за игру )';
			fs.writeFile(filename, logtext);
			console.log(logtext);
		}
	});	
}
function soc(res){
	if(res=='win'){
		var wincount = parseInt(arrgamelog['win'])+1;
		arrgamelog['win'] = wincount;
	} else {
		var wincount = parseInt(arrgamelog['lose'])+1;
		arrgamelog['lose'] = wincount;		
	}
}