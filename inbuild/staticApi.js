
let fs = require('fs');


const http = require('http')




const port = 4000
 
// creating htttp server


const server = http.createServer(function(req, res){

// reading file
	

const data =	fs.readFileSync('myfile.txt' , {encoding:'utf-8' , flag :'r' })
  res.write(data)

	res.end()

})


server.listen(port ,  ()=>{

console.log(`server is listing on port ${port}`);

}
)
