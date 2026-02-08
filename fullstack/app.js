import express from 'express'
import { configDotenv } from 'dotenv'
import { ROUTER } from './router/router.js'
import { PRODUCT_ROUTER } from './router/productRouter.js'
import { CATEGORY_ROUTER } from './router/categoryRouter.js'
import { connectDB } from './db/conn.js'
import morgan from 'morgan';
import fs from 'fs'
import swaggerUi from 'swagger-ui-express'
import swaggerJsdoc from 'swagger-jsdoc'
import {options} from './swaggerConfig.js'
configDotenv()

const APP = express()
 const PORT = process.env.PORT || 3000

// middlewares

APP.use(morgan('common', {
    stream: fs.createWriteStream('./app.log')
})) //enable morgan  : - it is used to debug the what http request to hiting like Get /product

APP.use(express.json())

// routes


const specs = swaggerJsdoc(options);
APP.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs));


APP.use('/api', ROUTER)
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