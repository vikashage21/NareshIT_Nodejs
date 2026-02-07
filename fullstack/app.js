import express from 'express'
import { configDotenv } from 'dotenv'
import { ROUTER } from './router/router.js'
import { PRODUCT_ROUTER } from './router/productRouter.js'
import { CATEGORY_ROUTER } from './router/categoryRouter.js'
import { connectDB } from './db/conn.js'
configDotenv()

const APP = express()
const PORT = process.env.PORT || 3000

APP.use(ROUTER)
APP.use('/api/product', PRODUCT_ROUTER)
APP.use('/api/category', CATEGORY_ROUTER)

// database connection 

connectDB(


    APP.listen(PORT, (error) => {
        if (error) {
            throw error
        } else {
            console.log(`server is running on port ${PORT}🚀🚀`)
        }
    })
)