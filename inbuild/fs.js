
let fs = require('fs')

//fs.writeFile('text.txt' , 'this is my data of node ' ,err =>{


//if(err) throw err;
//	console.log('done');

//} )


//fs.appendFile('text.txt' , 'code from developer' , err=> {
//if (err) throw err;
//	console.log('added the data in file');

//}


//)


// fs.readFile('text.txt' , 'utf-8' , (error , data)=>{
// 	if(error ) throw error ;
// 	console.log(data)
// }
// )


// async 


// const data = fs.readFileSync('text.txt',{encoding:'utf-8', flag:'r'})

// console.log(data)


// fs.unlink('text.txt', err=>{
// 	if(err) throw err ;
// 	console.log('file deleted')
// })


// rename

fs.rename('test.txt' , 'myfile.txt' , (err)=>{
	if(err) throw err ;
	console.log('file name changed')
})


