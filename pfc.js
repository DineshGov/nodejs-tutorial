let result = "";
let playerPick = "";

function pfc(){

	var rl = require('readline-sync');

	let ia = Math.floor(Math.random() * 3 + 1);
	let iaPick = "";
	let playerPick = "";
	let result = "";

	switch(ia){
		case 1:
			iaPick = 'pierre';
			break;
		case 2:
			iaPick = 'feuille';
			break;
		case 3:
			iaPick = 'ciseaux';
			break;
	}

	
	playerPick = rl.question('Your turn! (p | f | c): ');

	switch(playerPick){
		case 'p':
			playerPick = 'pierre';
			break;
		case 'f':
			playerPick = 'feuille';
			break;
		case 'c':
			playerPick = 'ciseaux';
			break;
		default:
			playerPick = 'error';

	}

	if( playerPick == iaPick )
		result = "DRAW"
	else if ( playerPick == "pierre" ){
		if (iaPick == "feuille")
			result = "YOU LOSE!"
		else
			result = "YOU WIN!"
	}
	else if ( playerPick == "feuille" ){
		if (iaPick == "ciseaux")
			result = "YOU LOSE!"
		else
			result = "YOU WIN!"
	}
	else{
		if (iaPick == "pierre")
			result = "YOU LOSE!"
		else
			result = "YOU WIN!"
	}

	console.log('\nyou picked: ' + playerPick);
	console.log('IA picked: ' + iaPick);
	console.log("\n **************************")
	if(result == 'DRAW')
		console.log('\x1b[5m', "            " + result );	
	else
		console.log('\x1b[5m', "        " + result );
	console.log('\x1b[0m', "**************************\n");
	

}

do{
	pfc();
}while( 0 < 1 )


