// learning http modules - native modules 

const http = require('http')

// req > what we send to server(params , queryParams , body)
//res > wht server sends in return 
let server = http.createServer((req , res)=>{

res.write('<h1> this is node js code server</h1>')
	res.end()



})


server.listen(8000 ,()=>{

console.log('server is listen of port ')

})
