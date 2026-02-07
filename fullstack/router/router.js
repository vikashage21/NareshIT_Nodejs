import express from  'express' 
import {getUsers} from '../controller/controller.js'

// creating router

export const ROUTER = express.Router();

ROUTER.get('/' , getUsers)