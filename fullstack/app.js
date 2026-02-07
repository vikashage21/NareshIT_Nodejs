import express from 'express'
import { configDotenv } from 'dotenv'
import { ROUTER } from './router/router.js'
configDotenv()

const APP = express()
const PORT = process.env.PORT || 3000

APP.use('/api', ROUTER)

APP.listen(PORT, (error) => {
   if(error){
    throw error
   }else{
     console.log(`server is running on port ${PORT}🚀🚀`)
   }
})