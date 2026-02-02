
let fs = require('fs')

fs.writeFile('text.txt' , 'this is my data of node ' ,err =>{


if(err) throw err;
	console.log('done');

} )

