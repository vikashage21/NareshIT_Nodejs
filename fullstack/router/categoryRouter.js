import express from 'express'
import { getCategory } from '../controller/getCategory.js';
import { getCategoryDetails } from '../controller/getCategoryDetails.js'

export const CATEGORY_ROUTER = express.Router()
 /**
         * @swagger
         * /category:
         *   get:
         *     summary: Get all category
         *     responses:
         *       200:
         *         description: List of category
         */


CATEGORY_ROUTER.get('/', getCategory)

CATEGORY_ROUTER.get('/details', getCategoryDetails)