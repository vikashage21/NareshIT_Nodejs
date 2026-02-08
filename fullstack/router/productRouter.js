import express from  'express' ;
import { productController } from '../controller/productController.js';
import { productDetailsController } from '../controller/productDetailsContoller.js';

export const PRODUCT_ROUTER = express.Router() 

   /**
         * @swagger
         * /product:
         *   get:
         *     summary: Get all products
         *     responses:
         *       200:
         *         description: List of products
         */


PRODUCT_ROUTER.get('/' ,productController )

PRODUCT_ROUTER.get('/details' , productDetailsController )