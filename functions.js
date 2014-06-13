function say(word){
	console.log(word);
}

function execute(func, word){
	func(word);
}

execute(say, "ciao");
