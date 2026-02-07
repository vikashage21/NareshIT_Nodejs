import express from  'express' ;
import { productController } from '../controller/productController.js';
import { productDetailsController } from '../controller/productDetailsContoller.js';

export const PRODUCT_ROUTER = express.Router() 


PRODUCT_ROUTER.get('/' ,productController )

PRODUCT_ROUTER.get('/details' , productDetailsController )