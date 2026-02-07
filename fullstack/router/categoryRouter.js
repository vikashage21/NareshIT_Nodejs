import express from 'express'
import { getCategory } from '../controller/getCategory.js';
import { getCategoryDetails } from '../controller/getCategoryDetails.js'

export const CATEGORY_ROUTER = express.Router()

CATEGORY_ROUTER.get('/', getCategory)

CATEGORY_ROUTER.get('/details', getCategoryDetails)