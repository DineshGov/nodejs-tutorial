const fs = require('fs');
const path = require('path');
const utils = require('util');

const readFile = utils.promisify(fs.readFile);
const writeFile = utils.promisify(fs.writeFile);

//const originalMap = path.join('data', 'test.txt');
const originalMap = path.join('data', 'excel.csv');
const mapCopy = 'excel-copy.csv';

const options = {
	encoding: 'utf-8'
};

/*fs.readFile(originalMap, options, (err, data) => {
	if(err){
		console.log('error occurs ', err);
		throw err;
	}
	console.log(data);

	fs.writeFile(mapCopy, data, (err) => {
	if(err){
		console.log('error occurs ', err);
		throw err;
	}
	console.log('fichier copié!');
})

})*/

readFile(originalMap)
	.then(data => {
		console.log(data);
		return writeFile(mapCopy, data);
	})
	.then(result => {
		console.log('fichier copié!');
	})
	.catch(err => {
		console.log('error occurs ', err);
	})