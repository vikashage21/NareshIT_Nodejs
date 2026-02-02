
let os = require('os'); 
console.log(os.platform()) // win32
console.log(os.arch()) //x64
console.log(os.cpus().length) // 4 core
console.log(os.freemem()) // freespace
console.log(os.uptime()) // some time

