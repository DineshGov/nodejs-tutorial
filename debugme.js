let i = 1;

function printHello(){
	console.log("Test" + i);
	i++;
}

setInterval(printHello, 1000);